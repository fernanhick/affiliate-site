import React from "react";
import { itemsData } from "./data";
import "./footwear.css";
const banner = require("./images/f-banner-1900x200.jpg");

function Footwear() {
    console.log(itemsData);
    return (
        <>
            {" "}
            <div className="section-banner">
                <img width="100%" height="100%" src={banner} />
            </div>
            <div className="footwear section">
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

export default Footwear;
