import React from "react";

function Categories({categories,filterItems}) {
  return (
    <div className="categories-container">
      {categories.map((category,index)=>{
        return (
          <button type="button" key={index} onClick={()=>filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
