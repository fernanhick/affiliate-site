import React from "react";
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
                    <a href="">home</a>
                </li>
                <li>
                    <a href="">electronics</a>
                </li>
                <li>
                    <a href="">clothing</a>
                </li>
                <li>
                    <a href="">footwear</a>
                </li>
                <li>
                    <a href="">digital</a>
                </li>
            </div>
        </>
    );
}

export default Navbar;
