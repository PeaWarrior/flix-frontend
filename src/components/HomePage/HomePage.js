import React, { useState, useEffect } from 'react';
import { URL } from '../../utilities/constants';

import StyledHomePageSection from './HomePage.styled';
import MovieCard from '../SearchPage/MovieCard';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`${URL}movies`)
      .then(resp => resp.json())
      .then(data => {
        setNowPlaying([...data.nowPlaying]);
        setPopular([...data.popular]);
      })
  }, []);

  const renderMovieCards = (movies) => {
    return movies.map(movie => (
      <MovieCard key={movie.id} {...movie} />
    ))
  }

  return (
    <StyledHomePageSection>
      <h2>Welcome to <span>FLIX</span>.</h2>
      <h2>Millions of movies. Explore now.</h2>

      <h4>Now Playing</h4>
      <div className='movies-carousel'>
        {renderMovieCards(nowPlaying)}
      </div>

      <h4>Popular</h4>
      <div className='movies-carousel'>
        {renderMovieCards(popular)}
      </div>
    </StyledHomePageSection>
  );
}

export default HomePage;