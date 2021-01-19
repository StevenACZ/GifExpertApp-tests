import React from 'react';
import PropTypes from 'prop-types'

const GifGridItem = ( { url, title } ) => {
  return (
    <div className="card">
      <img src={ url } alt={ title } />
      <p>{ title }</p>
    </div>
  )
};

GifGridItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default GifGridItem;