import { API_KEY, API_URL } from "../Settings/constants";

const fromApiResponse = (apiResponse) => {
  const { data } = apiResponse
  console.log(data)
    const { images, title, id } = data
    const { url } = images.downsized_medium
    return { url, title, id }
};

const getApiSingleGif = ({ id }) => {
  
  return fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then((resp) => resp.json())
    .then(fromApiResponse);
};

export default getApiSingleGif;
