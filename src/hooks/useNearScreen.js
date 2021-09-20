import { useEffect, useRef, useState } from 'react'

export const useNearScreen = ({ distance = '60px', externalRef, once = true} = {}) => {
    const [show, setShow] = useState(false)
    const refElement = useRef()
    // console.log(externalRef)

    useEffect(() => {
        let observer

        const element = externalRef ? externalRef.current : refElement.current

        const callback = (entries, observer) => {
            const elem = entries[0]
            if (elem.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import ('intersection-observer') 
        ).then(() => {
            observer = new IntersectionObserver(callback, {
                rootMargin : distance
            })
    
            if(element) observer.observe(element)
        })

       
        return () => observer && observer.disconnect()

    })

    return { show, refElement }
}
