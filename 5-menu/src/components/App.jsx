import React, { useState } from "react";
import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";
import data from "../data";

const allCategories=['all',...new Set(data.map(item=>item.category))];

function App() {

  const [categories,setCategories]=useState(allCategories);
  const [items,setItems]=useState(data);

  const filterItems=(category)=>
  {
    if(category==='all')
      setItems(data);
    else
    {
      const newItems=data.filter(item=>item.category===category);
      setItems(newItems);
    }
  };

  return (
    <main>
        <Title />
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={items} />
    </main>
  );
}

export default App;
