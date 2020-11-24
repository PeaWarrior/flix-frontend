import React from 'react';

const MovieCard = ({ title, poster_path, overview, release_date, id  }) => {

  return (
    <div>
      <h4>{title}</h4>
      <img src={`http://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <p>{overview}</p>
    </div>
  )
};

export default MovieCard;