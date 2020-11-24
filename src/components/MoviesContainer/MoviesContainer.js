import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MoviesContainer = ({ movies }) => {

  console.log(movies);

  const renderMovieCards = movies.map(movie => {
    return (
      <MovieCard {...movie} key={movie.id} />
    )
  })

  return (
    <div>
      {renderMovieCards}
    </div>
  )
};

export default MoviesContainer;