import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <h1>Login page</h1>
                    </Route>
                    <Route path="/checkout">
                        <h1>Checkout page</h1>
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
