import { useState } from "react"
import { useEffect } from "react/cjs/react.development"
import { Link, Redirect } from "wouter"
import getApiSingleGif from "../../services/getSingleGif"

const NotFound = () => {
    const [image, setImge] = useState(null)
    let id = '9J7tdYltWyXIY';
    useEffect(() => {
        getApiSingleGif({ id }).then(resp => {
            const { url } = resp
            setImge(url)
        })
    },[id])

    console.log(image)
    //9J7tdYltWyXIY= 
    const handleClick = (e) => {
        console.log("la puta medre")
    } 
    return (
        <>
            <div className="FourOhFour">
                <div className="bg" style={{backgroundImage: `url('${image}')`}}></div>
                <div className="code">404</div>
                <button type='button' onClick={handleClick}>Go back home</button>

            </div>

        </>
    )
}

export default NotFound