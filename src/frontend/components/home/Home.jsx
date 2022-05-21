import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
const fblock = require("./images/f-block.jpg");
const eblock = require("./images/e-block.jpg");
const cblock = require("./images/c-block.jpg");
function Home() {
    return (
        <div className="home-section">
            <div className="hero-section">
                <div className="hero-wrapper">
                    <h1 className="header-hero">Welcome to Shinobix</h1>
                    <span className="rain-lines"></span>
                    <div className="hero-desc">
                        <div className="sections-wrapper">
                            <p className="hero-text">
                                This is an Affiliate products website with the
                                listing of different products handpicked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sections-wrapper">
                <div className="sections-box section-electronics">
                    <img src={eblock} alt="" />
                    <div className="section-header">
                        <h1>Electronics</h1>
                        <div className="section-link">
                            <Link to="/electronics">GO THERE </Link>
                        </div>
                    </div>
                    <div className="section-body">
                        <p>
                            Find all the electronic devices picked from the
                            bestesellers and best reviews gathered through the
                            different websites in the internet
                        </p>
                    </div>
                    <div className="section-footer">
                        <span>
                            products included: Laptops, Monitors, Portable
                            drives...
                        </span>
                    </div>
                </div>
                <div className="sections-box section-clothing">
                    <img src={cblock} alt="" />
                    <div className="section-header">
                        <h1>Clothing</h1>
                        <div className="section-link">
                            <Link to="/clothing">GO THERE </Link>
                        </div>
                    </div>
                    <div className="section-body">
                        <p>
                            Get a wide range of clothing options from the
                            bestsellers picked from the different websites and
                            stay on top of the fashion choice.
                        </p>
                    </div>
                    <div className="section-footer">
                        <span>
                            products included: Polo shirts, Jumpers, T-shirts,
                            Joggers and more...
                        </span>
                    </div>
                </div>
                <div className="sections-box section-footwear">
                    <img src={fblock} alt="" />
                    <div className="section-header">
                        <h1>Footwear</h1>
                        <div className="section-link">
                            <Link to="/footwear">GO THERE </Link>
                        </div>
                    </div>
                    <div className="section-body">
                        <p>
                            Stay on top of the latest sales and deals for top of
                            the line sneakers in the market, get the best deals
                            in one click.
                        </p>
                    </div>
                    <div className="section-footer">
                        <span>
                            products included: Nike Air Jordan, Adidas Gazelle,
                            Lifting Shoes and more...
                        </span>
                    </div>
                </div>
                {/* <div className="sections-box section-footwear">
                    <div className="section-header">
                        <h1>Footwear</h1>
                    </div>
                    <div className="section-body">
                        <p>
                            Find all the electronics devices picked from the
                            bestesellers and best reviews gathered through the
                            different websites in the internet
                        </p>
                    </div>
                    <div className="section-footer">
                        <span>
                            products included: Laptops, Monitors, Portable
                            drives...
                        </span>
                        <div className="section-link">
                            <Link to="/footwear">Find out more </Link>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
