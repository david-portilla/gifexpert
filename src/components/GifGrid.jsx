import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ term }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(term);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {term.length > 0 && images.length === 0 && (
        <p>No results were found for:</p>
      )}
      <h3>{term}</h3>
      <div className="card-grid">
        {images &&
          images.map(({ id, title, url }) => (
            <GifItem key={id} title={title} url={url} />
          ))}
      </div>
    </>
  );
};
