import { useContext, useEffect, useState } from "react";
import { getApiGif } from "../services/getGifApi";
import GifContext from "../Context/GifContext";

const INITIAL_PAGE = 0;

export const useGif = ({ keyword } = { keyword: null }) => {
  const { gifs, setGifs } = useContext(GifContext);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loadingPage, setLoadingPage] = useState(false);
  const keywordToUse = keyword
    ? keyword
    : localStorage.getItem("lastKeyword")
    ? localStorage.getItem("lastKeyword")
    : "random";

  useEffect(() => {
    setLoading(true);

    getApiGif({ keyword: keywordToUse }).then((resp) => {
      setGifs(resp);
      setLoading(false);
      localStorage.setItem("lastKeyword", keyword);
    });
  }, [keyword, setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;
    setLoadingPage(true)
    getApiGif({ keyword: keywordToUse, page }).then((nextGifs) => {
      setGifs((prevGif) => prevGif.concat(nextGifs));
      setLoadingPage(true)
    });
  }, [page, keywordToUse,setGifs]);

  return { loading, gifs, setPage, loadingPage };
};
