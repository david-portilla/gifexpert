export const getGifs = async (category) => {
  if (category === "") return;
  const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=oC8I9foQB9Y1uSSK4dEKfF38kcVQFAEa`;
  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map((item) => {
    return {
      id: item.id,
      title: item.title,
      url: item.images?.downsized_medium.url,
    };
  });
  return gifs;
};
