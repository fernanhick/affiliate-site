import React from "react";
import { itemsData } from "./data";
const banner = require("./images/e-banner-1900x200.jpg");

function Electronics() {
    return (
        <>
            <div className="section-banner">
                <img width="100%" height="100%" src={banner} />
            </div>
            <div className="electronics section">
                {itemsData.map((item) => (
                    <div className="item-box" key={item.name}>
                        <h1>{item.name}</h1>
                        <p className="price">Price: {item.price}</p>
                        <p className="descrition">
                            Description: {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Electronics;
