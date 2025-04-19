import React from "react";

const MovieCard = ({
  anime: {
    title,
    score,
    images: {
      jpg: { image_url },
    },
    year,
  },
}) => {
  return (
    <div className="movie-card">
      <img src={image_url} alt={title} />
      <div className="mt-4">
        <h3>{title}</h3>
        <div className="content">
          <div className="rating">
            <img src="./star.svg" alt="star" />
            <p>{score ? score.toFixed(1) : "N/A"}</p>
          </div>
          <p className="year">{year}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
