const getGifsFetch = async( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=JAV02qV4lbtsmNmzwiyZOh8MpxB6md9C`
  
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url
    }
  })

  return gifs;
}

export default getGifsFetch;