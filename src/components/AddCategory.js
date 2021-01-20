import React, { useState } from 'react';
import PropTypes from 'prop-types'

const AddCategory = ( { setCategory } ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = ( e ) => {
    setInputValue(e.target.value);
    console.log( 'handleInputChange llamado' );
  };

  const handleSubmit = ( e ) => {
    e.preventDefault();

    setCategory( cats => [ inputValue, ...cats ] );
    setInputValue('');
  };

  return (
    <form onSubmit={ handleSubmit }>
      <p> { inputValue } </p>
      <input
        type="text"
        placeholder="Busca algo..."
        value={ inputValue }
        onChange={ handleInputChange }
      />
    </form>
  )
};

AddCategory.propTypes = {
  setCategory: PropTypes.func.isRequired
}

export default AddCategory;