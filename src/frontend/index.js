import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Footwear from "./components/footwear/Footwear";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Electronics from "./components/electronics/Electronics";
import Clothing from "./components/clothing/Clothing";
import Footbar from "./components/footbar/Footbar";
import Home from "./components/home/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/footwear" element={<Footwear />} />
                <Route path="/electronics" element={<Electronics />} />
                <Route path="/clothing" element={<Clothing />} />
            </Routes>
            <Footbar />
        </Router>
    </React.StrictMode>
);
