import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledMovieCard } from './MovieCard.styled';

const MovieCard = ({ id, title, poster }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/movie/${id}`)
  }

  return (
    <StyledMovieCard onClick={handleClick}>
      <img src={poster} alt={title} />
      <h4>{title}</h4>
    </StyledMovieCard>
  )
};

export default MovieCard;