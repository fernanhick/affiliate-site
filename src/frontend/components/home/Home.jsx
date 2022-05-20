import React from "react";
import "./home.css";
function Home() {
    return (
        <div className="home-section">
            <div className="hero-section">
                <div className="hero-wrapper">
                    <h1 className="header-hero">Welcome to Shinobix</h1>
                    <span className="rain-lines"></span>
                    <div className="hero-desc">
                        <p className="hero-text">
                            This is an Affiliate products website
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
