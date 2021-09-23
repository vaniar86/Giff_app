import { Suspense } from "react"
import { lazy } from "react"
import  {useNearScreen}  from "../../hooks/useNearScreen"
import Loader from "../Loader"

const TredingSearches = lazy (
    () => import('./TrendigSearches')
)



const LazyTrending = () => {
    const { show, refElement } = useNearScreen({distance : '200px' })

    return (
        <Suspense fallback={<Loader/>}>
        <div ref={refElement}>
            {show ? <TredingSearches /> : <Loader/>}
        </div>
        </Suspense>
    )
    
}

export default LazyTrending