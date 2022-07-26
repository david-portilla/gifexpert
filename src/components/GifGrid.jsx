import React, { useEffect, useState } from "react";
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
      {images && images.length === 0 && <p>No results found for:</p>}
      <h3>{category}</h3>
      <ol>
        {images && images.map(({ id, title }) => <li key={id}>{title}</li>)}
      </ol>
    </>
  );
};
