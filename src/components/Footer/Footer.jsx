import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles["l-footer"]}>
            <ul className={styles["l-footer__menu"]}>
                <li>
                    <a href="#">Conditions of Use</a>
                </li>
                <li>
                    <a href="#">Privacy Notice</a>
                </li>
                <li>
                    <a href="#">Interest-Based Ads</a>
                </li>
            </ul>
            <p className={styles["l-footer__copyright"]}>
                © 1998-2020, Amokrane Abdennour 7th70k4g3, Inc. or its
                affiliates
            </p>
        </div>
    );
}
