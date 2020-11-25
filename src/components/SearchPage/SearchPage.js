import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { StyledMovieContainer } from './SearchPage.styled';
import MovieCard from './MovieCard';

const MovieContainer = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState({
    total: null,
    current: null,
  })

  useEffect(() => {
    fetch(`${URL}search/${query}`)
      .then(resp => resp.json())
      .then(data => {
        const foundMovies = data.results.map(parseMovieData);
        setMovies(foundMovies);
      })
  }, [query]);

  const parseMovieData = (movieData) => {
    return {
      id: movieData.id,
      title: movieData.title,
      poster: movieData.poster_path ? `http://image.tmdb.org/t/p/w500${movieData.poster_path}` : null
    };
  }

  const renderMovieCards = movies.map(movie => {
    return (
      <MovieCard key={movie.id} {...movie} />
    )
  })

  return (
    <StyledMovieContainer>
      {renderMovieCards}
    </StyledMovieContainer>
  )
};

export default MovieContainer;