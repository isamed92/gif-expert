import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  //   const categories = ['one punch', 'samurai x', 'Dragon ball'];
  const [categories, setCategories] = useState([
    'one punch'
  ]);

//   const handleAdd = () =>{
//       setCategories([...categories, 'HunterXHunter']);
//       console.log(categories);
//   }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />
      <ol>
        {categories.map((value) => 
          <GifGrid category={value} key={value}/>
        )}
      </ol>
    </>
  );
};
