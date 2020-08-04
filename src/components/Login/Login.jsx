import React from "react";
import styles from "./Login.module.css";

function Login() {
    return (
        <div className={styles["l-login"]}>
            <img
                className={styles["l-login__logo"]}
                src="https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg"
                alt=""
            />
            <div className={styles["l-login__l-form"]}>
                <h1>Sign In</h1>
                <form className={styles["l-login__form"]}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />

                    <button type="submit">Sign in</button>
                </form>
                <p className={styles["l-login__condition"]}>
                    By continuing, you agree to
                    <a href="#"> Amazon's Conditions of Use</a> and{" "}
                    <a href="#">Privacy Notice</a>.
                </p>
                <button className={styles["l-login__create_button"]}>
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
