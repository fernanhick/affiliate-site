import React from "react";
import { itemsData } from "./data";
import "./footwear.css";
function Footwear() {
    console.log(itemsData);
    return (
        <>
            {" "}
            <div className="section-banner"></div>
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
