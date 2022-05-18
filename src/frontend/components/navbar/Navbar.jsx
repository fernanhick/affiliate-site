import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <span>Shi</span>
                    <span>nobix</span>
                </div>
            </div>
            <div className="nav-list">
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/electronics">electronics</Link>
                </li>
                <li>
                    <Link to="/clothing">clothing</Link>
                </li>
                <li>
                    <Link to="/footwear">footwear</Link>
                </li>
                <li>
                    <Link to="/digital">digital</Link>
                </li>
            </div>
        </>
    );
}

export default Navbar;
