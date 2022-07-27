import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ term }) => {
  const { images, isLoading } = useFetchGifs(term);

  return (
    <>
      {term.length > 0 && images.length === 0 && (
        <p>No results were found for:</p>
      )}
      <h3>{term}</h3>
      {isLoading && <h2>Loading</h2>}
      <div className="card-grid">
        {images &&
          images.map(({ id, title, url }) => (
            <GifItem key={id} title={title} url={url} />
          ))}
      </div>
    </>
  );
};
