import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GiftExpertApp = ( { defaultCategories = [] } ) => {
  const [categories, setCategory] = useState( defaultCategories );

  return (
    <div>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategory={ setCategory } />      
      <hr />

      { 
        categories.map( category => (
          <GifGrid
            key={ category }
            category={ category }
          />
        ))
      }
    </div>
  )
};

export default GiftExpertApp;