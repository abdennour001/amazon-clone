import React, { useEffect } from "react";
import styles from "./Checkout.module.css";
import { ProductCardCheckout as Card } from "./ProductCardCheckout";
import { useStateValue } from "../../utils/StateProvider";
import CurrencyFormat from "react-currency-format";

function Checkout() {
    useEffect(() => {
        console.warn("SET WHITE");
        document.body.style = "background: white;";
        return () => {
            console.warn("RESET TO GRAY");
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
                    {basket.length === 0 && (
                        <p style={{ opacity: 0.6 }}>
                            You shoping basket is empty, please try to add some
                            items.
                        </p>
                    )}
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
                    <CurrencyFormat
                        renderText={value => <strong>{value}</strong>}
                        decimalScale={2}
                        value={getTotal()}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
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
