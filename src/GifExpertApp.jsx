import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [results, setResults] = useState([""]);
  const onSearchTerm = async (searchTerm) => {
    if (results.includes(searchTerm)) return;
    setResults([searchTerm]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategory onSearchTerm={onSearchTerm} />
      {results.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
