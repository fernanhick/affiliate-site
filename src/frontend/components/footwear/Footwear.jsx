import React from "react";
import { itemsData } from "./data";
import "./footwear.css";
const banner = require("./images/f-banner-1900x200.jpg");

function Footwear() {
    return (
        <>
            <div className="section-banner">
                <img width="100%" height="100%" src={banner} />
            </div>
            <div className="footwear section">
                {itemsData.map((item) => (
                    <a key={item.link} href={item.link}>
                        <div className="item-box">
                            <img src={item.image} />
                            <h1>{item.name}</h1>
                            <p className="price">Price: {item.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Footwear;
