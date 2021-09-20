import { API_KEY, API_URL } from "../Settings/constants";

const fromApiResponse = (apiResponse) => {
  const { data = [] } = apiResponse;
  return data;
};

export const getTrendyGif = () => {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  return fetch(apiURL)
    .then((resp) => resp.json())
    .then(fromApiResponse);
};
