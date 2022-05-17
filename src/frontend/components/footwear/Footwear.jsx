import React from "react";
import { itemsData } from "./data";
import "./footwear.css";
function Footwear() {
    console.log(itemsData);
    return (
        <div className="footwear section">
            {itemsData.map((item) => (
                <div className="item-box" key={item.name}>
                    <h1>{item.name}</h1>
                    <p>Price: {item.price}</p>
                    <p>Description: {item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default Footwear;
