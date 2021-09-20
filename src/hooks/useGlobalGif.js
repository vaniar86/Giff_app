import { useContext } from "react";
import GifContext from '../Context/GifContext'

 const useGlobalGif = () => {
    return useContext(GifContext).gifs
}

export default useGlobalGif