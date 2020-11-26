import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { StyledMovieContainer } from './SearchPage.styled';
import MovieCard from '../MovieCard/MovieCard';
import PageCommands from '../PageCommands/PageCommands';

const MovieContainer = () => {
  const { query } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState({
    total: null,
    current: null,
  });
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${URL}search/${query}/1`)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        const foundMovies = data.results.map(parseMovieData);
        setMovies(foundMovies);
        setPage({
          total: data.total_pages,
          current: data.page
        });
        setError();
      }
    })
  }, [query]);

  const handleChangePageClick = (event) => {
    const pageToQuery = (event.target.getAttribute('data-page'));
    fetch(`${URL}search/${query}/${pageToQuery}`)
    .then(resp => resp.json())
    .then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        const foundMovies = data.results.map(parseMovieData);
        setMovies(foundMovies);
        setPage({
          ...page,
          total: data.total_pages,
          current: data.page
        });
        setError();
      }
    })
  };

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
      {movies.length > 0 && !error ? 
        <PageCommands {...page} handleChangePageClick={handleChangePageClick} />
        :
        null
      }
      <div className='movies-list'>
        {error ? 
        <h2>No results for <span>{query}</span></h2>
        : 
        renderMovieCards 
      }
      </div>
      {movies.length > 0 && !error ? 
        <PageCommands {...page} handleChangePageClick={handleChangePageClick} />
        :
        null
      }
    </StyledMovieContainer>
  )
};

export default MovieContainer;