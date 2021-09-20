import GifComponent from "../../Components/GifComponent"
import useGlobalGif from '../../hooks/useGlobalGif'

const Details = ({ params }) => {
    const gifs = useGlobalGif()
    const gif = gifs.find(sigleGif => sigleGif.id === params.id)
    //generar respaldo con llamada a la api  (https://api.giphy.com/v1/gifs?api_key=ucPcqxYa2opT9whuhTKghI446LOp0iJZ&ids=)

    return (
        <>
            <h3 className='appTitle'>{gif.title}</h3>
            <GifComponent id={gif.id} title={gif.title} url={gif.url}/>
        </>
    )

}

export default Details