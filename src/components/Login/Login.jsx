import React, { useState, useEffect } from "react";
import styles from "./Login.module.css";
import { auth } from "../../utils/firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../utils/StateProvider";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {})
            .catch(e => {
                alert(e.message);
            });
    };

    const handleRegister = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth.user);
            })
            .catch(e => {
                alert(e.message);
            });
    };

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
                    <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                        value={email}
                        placeholder="Your email"
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={e => {
                            setPassword(e.target.value);
                        }}
                        value={password}
                        placeholder="Your password"
                    />

                    <button onClick={handleLogin} type="submit">
                        Sign in
                    </button>
                </form>
                <p className={styles["l-login__condition"]}>
                    By continuing, you agree to
                    <a href="#"> Amazon's Conditions of Use</a> and{" "}
                    <a href="#">Privacy Notice</a>.
                </p>
                <button
                    onClick={handleRegister}
                    className={styles["l-login__create_button"]}
                >
                    Create your Amazon account
                </button>
            </div>
        </div>
    );
}

export default Login;
