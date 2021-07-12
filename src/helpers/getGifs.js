export const getGifs = async (category) => {
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=eS56VPwbQ39i8WQ1whMG1collvLwB7W0&q=${category}&limit=10`;
    const response = await fetch(endpoint);
    const {data} = await response.json();
    const gifs = data.map( ({id,title,images}) => {
        return {
            id,
            title,
            url: images?.downsized_medium.url
        }
    })
    return gifs;
}