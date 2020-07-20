import React from 'react'

export const GifGrid = ({ category }) => {

  const getImages = (async () => {
    const URL = 'https://api.giphy.com/v1/gifs/search?q=vegeta&limit=10&api_key=oC8I9foQB9Y1uSSK4dEKfF38kcVQFAEa'

    const res = await fetch(URL)
    const { data } = await res.json()

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        ulr: img.images?.downsized_medium.url
      }
    })
    console.log(gifs)
  })()

  return (
    <>
      <h3 key={ category }>{ category }</h3>
    </>
  )
}
