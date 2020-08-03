import React, { useEffect } from "react";
import styles from "./Checkout.module.css";
import { ProductCardCheckout as Card } from "./ProductCardCheckout";
import { useStateValue } from "../../utils/StateProvider";

function Checkout() {
    useEffect(() => {
        document.body.style = "background: white;";
        return () => {
            document.body.style = "background: rgb(234, 237, 237);";
        };
    }, []);

    const [{ basket }] = useStateValue();

    const getTotal = () => {
        let sum = 0;
        basket.forEach(element => {
            sum += element.price;
        });
        return sum;
    };

    return (
        <div className={styles["l-checkout"]}>
            <div className={styles["l-checkout__left"]}>
                <div className={styles["l-checkout__banner"]}>
                    <img
                        src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2018/Other/AVD-10716_PrimeMemberDealsPage/LandingPageBanners_AVD10716_PrimeMemberDealsPageRedesign_1500x200_Header.jpg"
                        alt=""
                    />
                </div>
                <div className={styles["l-checkout__basket"]}>
                    <h3 className={styles["l-checkout__title"]}>
                        Your Shopping Basket
                    </h3>
                    <ul className={styles["l-checkout__list"]}>
                        {basket.map(product => (
                            <li>
                                <Card
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    image={product.image}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={styles["l-checkout__checkout"]}>
                <div className={styles["l-checkout__l-price"]}>
                    <span>Subtotal ({basket.length} items): </span>
                    <strong>$</strong>
                    <strong>{getTotal()}</strong>
                </div>
                <div className={styles["l-checkout__l-gift"]}>
                    <label htmlFor="gift">
                        <input type="checkbox" name="gift" id="gift" />
                        <small>This order contains a gift</small>
                    </label>
                </div>
                <button>Proceed to checkout</button>
            </div>
        </div>
    );
}

export default Checkout;