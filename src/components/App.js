import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import theme from '../utilities/theme';

import SearchBar from './SearchBar/SearchBar';
import SearchPage from './pages/SearchPage';
import MoviePage from './MoviePage/MoviePage';

const App = () => {
  const [search, setSearch] = useState({
    query: '',
    totalPages: null,
    page: null,
    movies: [],
    totalResults: null,
  });

  return (
    <Router>
      <ThemeProvider theme={theme}>

        <SearchBar setSearch={setSearch} />
        <Switch>
          <Route path='/movie/:id' component={MoviePage} />
          <Route exact path='/search'>
            <SearchPage {...search} />
          </Route>
          <Route exact path='/'>
            HOME
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
