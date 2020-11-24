import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SearchBar from './SearchBar/SearchBar';
import SearchPage from './pages/SearchPage';

const App = () => {
  const [searchResults, setSearchResults] = useState({
    totalPages: null,
    page: null,
    movies: [],
    totalResults: null,
  });
  const [currentMovie, setCurrentMovie] = useState(null);

  return (
    <Router>
      <SearchBar setSearchResults={setSearchResults} />
      <Switch>
        <Route exact path='/search'>
          <SearchPage />
        </Route>
        <Route exact path='/'></Route>
      </Switch>
    </Router>
  );
}

export default App;
