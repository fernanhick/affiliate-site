import React from "react";
import { itemsData } from "./data";
const banner = require("./images/e-banner-1900x200.jpg");

function Electronics() {
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
                            <div className="desc">
                                {" "}
                                <h1>{item.name}</h1>
                                <p className="price">Price: {item.price}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </>
    );
}

export default Electronics;
