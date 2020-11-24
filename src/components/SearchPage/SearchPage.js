import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { StyledMovieContainer } from './SearchPage.styled';

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
  }, []);

  const parseMovieData = (movieData) => {
    return {
      id: movieData.id,
      title: movieData.title,
      poster: `http://image.tmdb.org/t/p/w500${movieData.poster_path}`
    };
  }

  // const renderMovieCards = movies.map(movie => {
  //   return (
  //     <div></div>
  //     // <MovieCard {...movie} key={movie.id} />
  //   )
  // })

  return (
    <StyledMovieContainer>
      {/* {renderMovieCards} */}
    </StyledMovieContainer>
  )
};

export default MovieContainer;