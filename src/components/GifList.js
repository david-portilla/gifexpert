import React, { useState, useEffect } from 'react'
import GifItem from './GifItem'

export const GifList = ({ category }) => {

  const [ images, setImages ] = useState([])

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const URL = 'https://api.giphy.com/v1/gifs/search?q=vegeta&limit=10&api_key=oC8I9foQB9Y1uSSK4dEKfF38kcVQFAEa'
    const res = await fetch(URL)
    const { data } = await res.json()

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    // console.log(gifs)
    setImages(gifs)
  }

  return (
    <>
      <h3 key={ category }>{ category }</h3>
      {
        images.map(img => (
          <GifItem
            key={ img.id }
            { ...img } />
        ))
      }
    </>
  )
}
