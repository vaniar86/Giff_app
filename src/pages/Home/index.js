import { useCallback, useState } from "react";
import useLocation from "wouter/use-location";
import ListOfGif from "../../Components/ListOfGif";
import SearchForm from "../../Components/SearchForm";
import TrendingSearch from "../../Components/TrendingSerchs";
import { useGif } from "../../hooks/useGif";

const Home = () => {
  const { gifs } = useGif();
  const [path, pushPath] = useLocation();

  const handleSubmit = useCallback((keyWord) => {
    pushPath(`/search/${keyWord}`);
  }, [pushPath]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <div className="appMain">
        <div className="appResult">
          <h3>Última busqueda</h3>
          <ListOfGif gifs={gifs} />
        </div>
        <div className="appCategory">
          <TrendingSearch />
        </div>
      </div>
    </>
  );
};

export default Home;
