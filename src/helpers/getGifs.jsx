export const getGifs = async (category) => {
  const categoryClean = encodeURI(category);
  const key = "Z4TcDFzFAaZVEl2Np9JGxAR3qWQuouC3";
  const url = `https://api.giphy.com/v1/gifs/search?q=${categoryClean}&limit=10&api_key=${key}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  return gifs;
};
