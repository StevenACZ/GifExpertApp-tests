import React, { useState } from 'react';

const AddCategory = ( { setCategory } ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    setCategory( cats => [ inputValue, ...cats ] );
    setInputValue('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        placeholder="Busca algo..."
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
};

export default AddCategory;