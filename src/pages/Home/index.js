import { useCallback } from "react";
import useLocation from "wouter/use-location";
import { Helmet } from "react-helmet";
import ListOfGif from "../../Components/ListOfGif";
import SearchForm from "../../Components/SearchForm";
import TrendingSearch from "../../Components/TrendingSerchs";
import { useGif } from "../../hooks/useGif";
import { BASE_TITLE } from "../../Settings/constants";


const Home = () => {
  const { gifs } = useGif();
  const [path, pushPath] = useLocation();

  const handleSubmit = useCallback(
    (keyword) => {
      pushPath(`/search/${keyword}`);
    },
    [pushPath]
  );
  return (
    <>
      <Helmet>
        <title>{`Home ${BASE_TITLE}`}</title>
        <meta name="description" content="Search Giff aplication"/>
      </Helmet>

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
