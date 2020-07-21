import React from 'react'

export const GifItem = ({ id, title, url }) => {
  return (
    <div className="card">
      <img key={ id } src={ url } alt={ title } />
      <p> { title }</p>
    </div>
  )
}
export default GifItem
