import React, { useState } from "react";
import Card from "./Card";

function List({data}) {
  return (
    <article>
      {data.map((person) => {
        return (
          <Card
            key={person.id}
            img={person.image}
            name={person.name}
            age={person.age}
          />
        );
      })}
    </article>
  );
}

export default List;
