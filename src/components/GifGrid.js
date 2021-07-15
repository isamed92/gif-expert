import React /*,{ useState, useEffect }*/ from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGriditem } from './GifGriditem';

export const GifGrid = ({ category }) => {
     const {data:images, loading} = useFetchGifs(category);


  

  const handleImages = (elements) =>
    elements.map((img) => <GifGriditem key={img.id} {...img} />);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className='card-grid'>{handleImages(images)}</div>
    </>
  );
};
