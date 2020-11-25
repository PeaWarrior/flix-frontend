import React from 'react';

import StyledMoviesCarousel from './MoviesCarousel.styled';
import MovieCard from '../MovieCard/MovieCard';

const MoviesCarousel = ({ movies }) => {

  const renderMovieCards = (movies) => {
    return movies.map(movie => (
      <MovieCard key={movie.id} {...movie} />
    ))
  }

  return (
    <StyledMoviesCarousel>
      {renderMovieCards(movies)}
    </StyledMoviesCarousel>
  )
}

export default MoviesCarousel;