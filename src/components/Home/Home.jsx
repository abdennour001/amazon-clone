import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Home.module.css";

function Home() {
    return (
        <div className={styles["home"]}>
            <img
                src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6c89dbce6b4ba36cfc9a13551b4a5ace48bf488900def16b58834791f10dc558._RI_V_TTW_.jpg"
                alt="banner"
                className={styles["home__image"]}
            />

            <div className={styles["home__row"]}>
                <ProductCard
                    key="2"
                    id="1"
                    title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
                    price={162.04}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/81bnBG8g7VL._AC_SL1500_.jpg"
                />
                <ProductCard
                    key="2"
                    id="2"
                    title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler"
                    price={159.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
