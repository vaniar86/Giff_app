import { memo } from "react";
import { Fragment } from "react";
import { Link } from "wouter";
import "../../Styles/styles.css";
const GifComponent = ({ id, title, url }) => {
  return (
    <Fragment>
      <div className="gif-component">
        <Link to={`/gifsDetails/${id}`} className="gif-link">
          <h4>{title}</h4>
          <img alt={title} src={url} />
        </Link>
      </div>
    </Fragment>
  );
};

export default memo(GifComponent);
