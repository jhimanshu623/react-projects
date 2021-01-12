import React from "react";
import Item from "./Item";

function Menu({items}) {
  return (
    <section className="menu-container">
        {items.map(item=>{
            return <Item key={item.id} {...item}/>;
        })}
    </section>
  );
}

export default Menu;
