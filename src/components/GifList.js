import React, { useState, useEffect } from 'react'
import GifItem from './GifItem'
import { getImages } from './helpers/getGifs'

export const GifList = ({ category }) => {

  const [ images, setImages ] = useState([])

  useEffect(() => {
    getImages(category)
      .then(img => setImages(img))
  }, [ category ])

  return (
    <div className="card-list">
      <h3 className="card-list-title" key={ category }>{ category }</h3>
      {
        images.map(img => (
          <GifItem
            key={ img.id }
            { ...img } />
        ))
      }
    </div>
  )
}
