import React from "react";
import styles from "./ProductCardCheckout.module.css";
import { useStateValue } from "../../../utils/StateProvider";

function ProductCardCheckout({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = e => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            item: {
                id: id
            }
        });
    };

    return (
        <div className={styles["l-product_card_checkout_out"]}>
            <img
                className={styles["l-product_card_checkout_out__image"]}
                src={image}
                alt=""
            />
            <div className={styles["l-product_card_checkout_out__info"]}>
                <p className={styles["l-product_card_checkout_out__title"]}>
                    {title}
                </p>
                <p className={styles["l-product_card_checkout_out__price"]}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div
                    className={styles["l-product_card_checkout_out__l-rating"]}
                >
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role="img" aria-label="star" key={i}>
                                ⭐️
                            </span>
                        ))}
                </div>
                <button
                    onClick={removeFromBasket}
                    className={styles["l-product_card_checkout_out__button"]}
                >
                    Remove from basket
                </button>
            </div>
        </div>
    );
}

export default ProductCardCheckout;
