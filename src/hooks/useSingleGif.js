import {  useLayoutEffect, useState } from 'react'
import { useEffect } from 'react/cjs/react.development'
import getApiSingleGif from '../services/getSingleGif'
import  useGlobalGif from './useGlobalGif'

const useSigleGif = ({ id }) => {
    const  gifs   = useGlobalGif()
    const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  

    useLayoutEffect( () => {
        
    if (!gif) {
      setIsLoading(true)
      // llamar al servicio si no tenemos gif
      getApiSingleGif({ id })
        .then(gif => {
          setGif(gif)
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
            console.log(err)
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return {gif, isLoading, isError}
}

export default useSigleGif

