import GifComponent from "../GifComponent";

const ListOfGif = ({ gifs }) => {
  return (
    <>
      <div className="ListOfGifs">
        {gifs.map(({ id, title, url }) => (
          <GifComponent key={id} id={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};

export default ListOfGif;
