import { useEffect, useState } from 'react'
import {getTrendyGif} from '../../services/getTrendiApiServices'
import Category from "../Category"



const TrendingSearch = () => {
    const [trends, setTrends] = useState([])

    useEffect(() => {
        getTrendyGif()
        .then(setTrends)
    }, [])
    
    return (
        <Category name='Tendencias' options={trends}/>
    )
}

export default TrendingSearch