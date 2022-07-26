import React, { useState } from "react";
import { SearchForm } from "./components/SearchForm";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [searchs, setSearchs] = useState([]);
  const onSearchTerm = (searchTerm) => {
    if (searchs.includes(searchTerm)) return;
    setSearchs([searchTerm]);
  };

  return (
    <>
      <h1>Get images from GIPHY</h1>
      <SearchForm onSearchTerm={onSearchTerm} />
      {searchs.map((search) => (
        <GifGrid key={search} term={search} />
      ))}
    </>
  );
};
