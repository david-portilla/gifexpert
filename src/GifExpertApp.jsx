import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["Goku", "Vegeta"]);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onNewCategory={onAddCategory} />
      <ol>
        {categories.map((category, idx) => {
          return <li key={idx}>{category}</li>;
        })}
      </ol>
    </>
  );
};
