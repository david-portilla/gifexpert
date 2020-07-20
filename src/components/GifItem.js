import React from 'react'

export const GifItem = ({ id, title, url }) => {
  return (
    <div>
      <img key={ id } src={ url } alt={ title } />
    </div>
  )
}
export default GifItem
