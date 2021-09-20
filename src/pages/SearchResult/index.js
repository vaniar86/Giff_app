import { useCallback, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import ListOfGif from "../../Components/ListOfGif";
import Loader from "../../Components/Loader";
import { useGif } from "../../hooks/useGif";
import {useNearScreen} from "../../hooks/useNearScreen";
import debounce from 'just-debounce-it'
import throttle from "just-throttle";


const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage, loadingPage } = useGif({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({ externalRef: loading ? null : externalRef, once : false });

 
 //usando debaunce
  const debounceNextPage = useCallback(() => debounce(setPage(prevPage => prevPage + 1), 200),  [setPage])
  //usando  throttle
  const throttleNextPage = useCallback(() => throttle(setPage(prevPage => prevPage + 1), 200, { leading: true }),[setPage])

  useEffect(() => {
    if (show) throttleNextPage();
  },[show, throttleNextPage, setPage]);
    
    
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="appWrapper">
            <h3 className="appTitle">{decodeURI(keyword)}</h3>
            <ListOfGif gifs={gifs} />
            <div id="visor" ref={externalRef}></div>
          </div>
        </>
      )}
    </>
  );
};

export default SearchResult
