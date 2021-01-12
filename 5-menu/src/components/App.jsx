import React from "react";
import Title from "./Title";
import Categories from "./Categories";
import Menu from "./Menu";
import items from "../data";

function App() {
  return (
    <main>
        <Title />
        <Categories />
        <Menu items={items} />
    </main>
  );
}

export default App;
