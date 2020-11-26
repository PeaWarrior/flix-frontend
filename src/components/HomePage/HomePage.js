import React, { useState, useEffect } from 'react';
import { URL } from '../../utilities/constants';

import StyledHomePageSection from './HomePage.styled';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';

const HomePage = () => {
  const [nowPlaying, setNowPlaying] = useState();
  const [popular, setPopular] = useState();

  useEffect(() => {
    fetch(`${URL}movies`)
      .then(resp => resp.json())
      .then(data => {
        setNowPlaying([...data.nowPlaying]);
        setPopular([...data.popular]);
      })
  }, []);

  return (
    <StyledHomePageSection>
      <h2>Welcome to <span>FLIX</span>.</h2>
      <h2>Millions of movies. Explore now.</h2>

      {nowPlaying ?
        <>
          <h3>Now Playing</h3>
          <MoviesCarousel movies={nowPlaying} />
        </>
        :
        null
      }

      {popular ?
        <>
        <h3>Popular</h3>
        <MoviesCarousel movies={popular} />
        </>
        :
        null
      }
    </StyledHomePageSection>
  );
}

export default HomePage;