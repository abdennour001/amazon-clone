import React from "react";
import ProductCard from "../ProductCard";
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
                    key="1"
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

            <div className={styles["home__row"]}>
                <ProductCard
                    key="3"
                    id="3"
                    title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L,Silver"
                    price={409.88}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/71vvXGmdKWL._AC_SL1500_.jpg"
                />
                <ProductCard
                    key="4"
                    id="4"
                    title="iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones"
                    price={159.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/718NVofDrCL._AC_SL1500_.jpg"
                />
                <ProductCard
                    key="5"
                    id="5"
                    title="Syncwire 3.5mm Nylon Braided Aux Cable (3.3ft/1m,Hi-Fi Sound), Audio Auxiliary Input Adapter Male to Male AUX Cord for Headphones, Car, Home Stereos, Speaker, iPhone, iPad, iPod, Echo & More - Black"
                    price={59.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/618kfUkfB%2BL._AC_SL1500_.jpg"
                />
            </div>
            <div className={styles["home__row"]}>
                <ProductCard
                    key="6"
                    id="6"
                    title="andobil Car Phone Mount Ultimate Smartphone Car Air Vent Holder Easy Clamp Cradle Hands-Free Compatible with iPhone 11/11 Pro/11 Pro Max/8 Plus/8/X/XR/XS/SE Samsung Galaxy S20/S20+/S10/S9/S8/Note 10"
                    price={200.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71-2LAugO6L._AC_SL1200_.jpg"
                />
            </div>
        </div>
    );
}

export default Home;
