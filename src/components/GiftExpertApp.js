import React, { useState } from 'react';
import AddCategory from './AddCategory';

const GiftExpertApp = () => {
  const [categories, setCategory] = useState(['Goku', 'Programacion', 'Spiderman']);

  return (
    <div>
      <h1>GiftExpertApp</h1>
      <AddCategory setCategory={ setCategory } />      
      <hr />

      { 
        categories.map( category => (
          <p>{ category }</p>
        ))
      }
    </div>
  )
};

export default GiftExpertApp;