import React, { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      {category.length > 0 && images.length === 0 && (
        <p>No results were found for::</p>
      )}
      <h3>{category}</h3>
      <div className="card-grid">
        {images &&
          images.map(({ id, title, url }) => (
            <GifItem key={id} title={title} url={url} />
          ))}
      </div>
    </>
  );
};
