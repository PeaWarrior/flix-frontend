import React from 'react';
import MoviesContainer from '../MoviesContainer/MoviesContainer';

const SearchPage = ({ query, totalPages, page, movies, totalResults }) => {
  return (
    <div>
      <h6>Showing results for "{query}"</h6>
      <MoviesContainer movies={movies} />
    </div>
  )
}

export default SearchPage;