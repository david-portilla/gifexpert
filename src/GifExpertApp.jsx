import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku", "Vegeta"]);
  const addCategory = () => {
    setCategories([...categories, "Freezer"]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory />
      <button onClick={addCategory}>Add category</button>
      <ol>
        {categories.map((category, idx) => {
          return <li key={idx}>{category}</li>;
        })}
      </ol>
    </>
  );
};
