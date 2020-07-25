export const getImages = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=oC8I9foQB9Y1uSSK4dEKfF38kcVQFAEa`
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
  // setImages(gifs)
  return gifs
}

// export default getImages