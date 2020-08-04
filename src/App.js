import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    useHistory
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./utils/StateProvider";
import { auth } from "./utils/firebase";
import firebase from "firebase";

function App() {
    const [{ user }, dispatch] = useStateValue();
    const history = useHistory();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                // sign in
                dispatch({
                    type: "SIGN_IN_USER",
                    user: authUser
                });
            } else {
                // sign out
                dispatch({
                    type: "SIGN_OUT_USER"
                });
            }
        });

        return () => {
            // cleanup
            unsubscribe();
        };
    }, []);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route
                        path="/login"
                        render={() =>
                            user ? (
                                <Redirect to="/" />
                            ) : (
                                <Login />
                            )
                        }
                    ></Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                        {/* <Footer /> */}
                    </Route>
                    {/* Default Route */}
                    <Route path="/">
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
