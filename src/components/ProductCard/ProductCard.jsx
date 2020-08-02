import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({ id, title, price, rating, image }) {
    return (
        <div className={styles["l-product_card"]}>
            <p>{title}</p>
            <p className={styles["l-product_card__price"]}>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className={styles["l-product_card__l-rating"]}>
                {Array(rating)
                    .fill()
                    .map(_ => (
                        <span>⭐️</span>
                    ))}
            </div>
            <img
                className={styles["l-product_card__image"]}
                src={image}
                alt=""
            />
            <button className={styles["l-product_card__button"]}>
                Add to basket
            </button>
        </div>
    );
}

export default ProductCard;
