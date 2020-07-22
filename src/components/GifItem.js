import React from 'react'
import PropTypes from 'prop-types'

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img key={ id } src={ url } alt={ title } />
      <p> { title }</p>
    </div>
  )
}

GifItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default GifItem
