import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
    return (
        <div className="nav-wrapper">
            <div className="navbar">
                <div className="logo">
                    <span>Shi</span>
                    <span>nobix</span>
                </div>
            </div>
            <div className="nav-list">
                <li>
                    <Link to="/">home</Link>
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
            </div>
        </div>
    );
}

export default Navbar;
