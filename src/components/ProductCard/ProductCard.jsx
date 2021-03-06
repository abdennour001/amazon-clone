import React from "react";
import styles from "./ProductCard.module.css";
import { useStateValue } from "../../utils/StateProvider";

function ProductCard({ id, title, price, rating, image }) {
    const [, dispatch] = useStateValue();

    const addToBasket = e => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: { id, title, price, rating, image }
        });
    };

    return (
        <div className={styles["l-product_card"]}>
            <div className={styles["l-product__info"]}>
                <p className={styles["l-product_card__title"]}>{title}</p>
                <p className={styles["l-product_card__price"]}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles["l-product_card__l-rating"]}>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span role="img" aria-label="star" key={i}>
                                ⭐️
                            </span>
                        ))}
                </div>
            </div>
            <img
                className={styles["l-product_card__image"]}
                src={image}
                alt=""
            />
            <button
                onClick={addToBasket}
                className={styles["l-product_card__button"]}
            >
                Add to basket
            </button>
        </div>
    );
}

export default ProductCard;
