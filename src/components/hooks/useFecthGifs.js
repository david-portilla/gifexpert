import { useState, useEffect } from 'react'
import { getImages } from '../helpers/getGifs'

export const useFetchGifs = ( category ) => {

  const [ state, setstate ] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getImages(category)
      .then(img => {
        setstate({
          data: img,
          loading: false
        })
      })
  }, [ category ])

  return state
}