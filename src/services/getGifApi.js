import { API_KEY, API_URL } from "../Settings/constants"


const fromApiResponse = (apiResponse) => {
    const { data = [] } = apiResponse
    if (Array.isArray(data)) {
        const gif = data.map(image => {
            const {images, title, id } = image
            const { url } = images.downsized_medium
            return {title, id, url}
        })
         return gif
    }
    return[]
}
export const getApiGif = ({ keyword='panda', limit = 10, page=0} = {}) => {
    const URL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page*limit}&rating=g&lang=en`
    return fetch(URL)
        .then(resp => resp.json())
        .then(fromApiResponse)
} 