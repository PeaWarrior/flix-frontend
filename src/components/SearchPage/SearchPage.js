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
  })

  useEffect(() => {
    fetch(`${URL}search/${query}/1`)
      .then(resp => resp.json())
      .then(data => {
        const foundMovies = data.results.map(parseMovieData);
        setMovies(foundMovies);
        setPage({
          ...page,
          total: data.total_pages,
          current: data.page
        })
      })
  }, [query]);

  const handleChangePageClick = (event) => {
    fetch(`${URL}search/${query}/${event.target.getAttribute('data-page')}`)
      .then(resp => resp.json())
      .then(data => {
        const foundMovies = data.results.map(parseMovieData);
        setMovies(foundMovies);
        setPage({
          ...page,
          total: data.total_pages,
          current: data.page
        })
      })
  }

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
      <PageCommands {...page} handleChangePageClick={handleChangePageClick} />
      <div className='movies-list'>
        {renderMovieCards}
      </div>
      <PageCommands {...page} handleChangePageClick={handleChangePageClick} />
    </StyledMovieContainer>
  )
};

export default MovieContainer;