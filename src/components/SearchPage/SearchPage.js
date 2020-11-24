import React from 'react';
import { useParams } from 'react-router-dom';

import { StyledMovieContainer } from './SearchPage.styled';

const MovieContainer = ({ movies }) => {
  const { query } = useParams();

  console.log(query);

  const renderMovieCards = movies.map(movie => {
    return (
      <div></div>
      // <MovieCard {...movie} key={movie.id} />
    )
  })

  return (
    <StyledMovieContainer>
      {renderMovieCards}
    </StyledMovieContainer>
  )
};

export default MovieContainer;