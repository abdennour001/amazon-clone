import React, { useEffect } from "react";
import styles from "./Header.module.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";
import { auth } from "../../utils/firebase";

function Header() {
    useEffect(() => {}, []);
    const [{ basket, user }] = useStateValue();
    const history = useHistory();

    const updateSelectWidth = e => {
        e.target.style.width =
            e.target.options[e.target.selectedIndex].text.length + 5 + "ch";
    };

    const signOut = e => {
        if (user) {
            auth.signOut();
            history.push("/");
        }
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
                <Link
                    to={!user ? "/login" : ""}
                    className={styles["header__link"]}
                >
                    <div
                        onClick={signOut}
                        className={styles["header__l-option"]}
                    >
                        <span className={styles["header__topLink"]}>
                            Hello {user == null ? "" : user.email}
                        </span>
                        <span className={styles["header__bottomLink"]}>
                            {user ? "Sign Out" : "Sign In"}
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
                        <span className={styles["header__basketCount"]}>
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}

export default Header;
