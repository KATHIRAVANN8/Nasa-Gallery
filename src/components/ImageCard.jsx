import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      {image.media_type === "image" ? (
        <img src={image.url} alt={image.title} loading="lazy" />
      ) : (
        <iframe src={image.url} title={image.title} allowFullScreen />
      )}
      <div className="content">
        <h3>{image.title}</h3>
        <p>{image.date}</p>

        <Link to={`/details/${image.date}`} className="btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
