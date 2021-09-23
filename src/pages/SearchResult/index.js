import { useCallback, useLayoutEffect, useRef } from "react";
import ListOfGif from "../../Components/ListOfGif";
import Loader from "../../Components/Loader";
import { useGif } from "../../hooks/useGif";
import { useNearScreen } from "../../hooks/useNearScreen";
// import debounce from 'just-debounce-it'
import throttle from "just-throttle";
import { Helmet } from "react-helmet";
import { BASE_TITLE } from "../../Settings/constants";

const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGif({ keyword });
  const externalRef = useRef();
  const { show } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  //usando debaunce
  // const debounceNextPage = useCallback(() => debounce(setPage(prevPage => prevPage + 1), 200),  [setPage])
  //usando  throttle
  const throttleNextPage = useCallback(
    () =>
      throttle(
        setPage((prevPage) => prevPage + 1),
        200,
        { leading: false }
      ),
    [setPage]
  );

  useLayoutEffect(() => {
    if (show) throttleNextPage();
  }, [show, throttleNextPage, setPage]);

  if (loading)
    return (
      <>
        <Helmet>
          <title>Cargando..</title>
        </Helmet>
        <Loader />
      </>
    );

  return (
    <>
      <Helmet>
        <title>{` ${decodeURI(keyword).toUpperCase()}  ${BASE_TITLE}`}</title>
        <meta name="description" content={`Result of searching for ${decodeURI(keyword)}`}/>
      </Helmet>
      <div className="appWrapper">
        <h3 className="appTitle">{decodeURI(keyword).toUpperCase()}</h3>
        <ListOfGif gifs={gifs} />
        <div id="visor" ref={externalRef}></div>
      </div>
    </>
  );
};

export default SearchResult;
