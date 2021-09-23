import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import GifComponent from "../../Components/GifComponent";
import Loader from "../../Components/Loader";
import useSigleGif from "../../hooks/useSingleGif";
import { BASE_TITLE } from "../../Settings/constants";

const Details = ({ params }) => {
  const { gif, isLoading, isError } = useSigleGif({ id: params.id });

  if (isError) return <Redirect to={"/NotFound"} />;
  if (isLoading)
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Loader />
      </>
    );
  if (!gif) return null;
  return (
    <>
      <Helmet>
        <title>{`${gif.title} ${BASE_TITLE}`}</title>
              <meta name="description" content={`Giff of ${gif.title}`} />
      </Helmet>
      <h3 className="appTitle">{gif.title}</h3>
      <GifComponent id={gif.id} title={gif.title} url={gif.url} />
    </>
  );
};

export default Details;
