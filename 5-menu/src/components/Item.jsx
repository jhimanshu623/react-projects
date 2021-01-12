import React from "react";

function Item(item) {
  return (
    <div className="item-container">
        <img src={item.img} alt={item.title+" img"} />
        <div className="info-container">
            <div className="info-header">
                <h4>{item.title}</h4>
                <div className="price">${item.price}</div>
            </div>
            <p>{item.desc}</p>
        </div>
    </div>
  );
}

export default Item;
