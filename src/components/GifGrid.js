import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then(setImages);
  }, [category]);

  

  const handleImages = (elements) =>
    elements.map((img) => <GifGriditem key={img.id} {...img} />);

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>{handleImages(images)}</div>
    </>
  );
};
