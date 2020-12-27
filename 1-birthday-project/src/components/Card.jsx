import React from "react";

function Card(props) {
  return (
    <div className="card">
      
      <div>
        <img src={props.img} alt={props.name + "img"}/>
      </div>

      <div>
        <h2>{props.name}</h2>
        <p>{props.age+" years"}</p>
      </div>

    </div>
  );
}

export default Card;
