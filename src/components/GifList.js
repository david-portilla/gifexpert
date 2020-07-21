import React from 'react'
import GifItem from './GifItem'
import { useFetchGifs } from './hooks/useFecthGifs'

export const GifList = ({ category }) => {

  const { data:images, loading } = useFetchGifs(category)

  return (
    <div className="card-list">
      <h3 className="card-list-title" key={ category }>{ category }</h3>

      { loading && <p>cargando</p> }

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
