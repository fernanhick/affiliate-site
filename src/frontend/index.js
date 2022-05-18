import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footwear from "./components/footwear/Footwear";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Electronics from "./components/electronics/Electronics";
import Digital from "./components/digital/Digital";
import Clothing from "./components/clothing/Clothing";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/Footwear">
                        <Footwear />
                    </Route>
                    <Route path="/Electronics">
                        <Electronics />
                    </Route>
                    <Route path="/Clothing">
                        <Clothing />
                    </Route>
                    <Route path="/Digital">
                        <Digital />
                    </Route>
                </Routes>
            </Router>
        </>
    </React.StrictMode>
);
