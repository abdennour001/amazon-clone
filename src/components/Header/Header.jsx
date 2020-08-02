import React, { useEffect } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
    useEffect(() => {}, []);

    const updateSelectWidth = e => {
        e.target.style.width = e.target.options[e.target.selectedIndex].text.length + 5 + "ch";
    };

    return (
        <nav className={styles["header"]}>
            {/** Logo section */}
            <Link to="/">
                <img
                    className={styles["header__img"]}
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                />
            </Link>

            {/** Search bar section */}
            <div className={styles["header__l-search"]}>
                <select
                    className={
                        styles["header__categorySelect"] +
                        " js-header__categorySelect"
                    }
                    onChange={updateSelectWidth}
                    name="category"
                    id="category"
                >
                    <option value="all">All</option>
                    <option value="beauty">Beauty</option>
                    <option value="electronics">Electronics</option>
                </select>
                <input
                    className={styles["header__searchInput"]}
                    type="text"
                    name="searchBar"
                    id="searchBar"
                />
                <SearchIcon className={styles["header__searchIcon"]} />
            </div>
            {/** 3 Links */}
            <div className={styles["header__l-nav"]}>
                <Link to="/" className={styles["header__link"]}>
                    <div className={styles["header__l-option"]}>
                        <span className={styles["header__topLink"]}>
                            Hello Amokrane
                        </span>
                        <span className={styles["header__bottomLink"]}>
                            Sign In
                        </span>
                    </div>
                </Link>
                <Link to="/" className={styles["header__link"]}>
                    <div className={styles["header__l-option"]}>
                        <span className={styles["header__topLink"]}>
                            Returns
                        </span>
                        <span className={styles["header__bottomLink"]}>
                            & Orders
                        </span>
                    </div>
                </Link>
                <Link to="/" className={styles["header__link"]}>
                    <div className={styles["header__l-option"]}>
                        <span className={styles["header__topLink"]}>Your</span>
                        <span className={styles["header__bottomLink"]}>
                            Prime
                        </span>
                    </div>
                </Link>
                {/** Basket section */}
                <Link to="/checkout" className={styles["header__link"]}>
                    <div className={styles["header__l-basket"]}>
                        <ShoppingBasket></ShoppingBasket>
                        <span className={styles["header__basketCount"]}>0</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
