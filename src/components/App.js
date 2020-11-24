import React, { useState, useEffect } from 'react';
import URL from '../config';

import Search from './Search';
import MoviesContainer from './MoviesContainer/MoviesContainer';

const App = () => {
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  // useEffect(() => {
  //   fetch(`${URL}movies`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       const { nowPlaying, popular } = data;
  //       setNowPlaying(nowPlaying.results);
  //       setPopular(popular.results);
  //     })
  // }, []);

  // console.log('popular', popular);
  // console.log('nowplaying', nowPlaying);

  return (
    <div>
      <Search></Search>
      <MoviesContainer heading='Now Playing' movies={nowPlaying} />
      <MoviesContainer heading='Popular' movies={popular} />
      Hello World!
    </div>
  );
}

export default App;
