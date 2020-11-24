import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = ({ setSearch }) => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetch(`${URL}search/${query}`)
  //     .then(resp => resp.json())
  //     .then(data => {
  //       setSearch(prevState => ({
  //         ...prevState,
  //         query: query,
  //         page: data.page,
  //         movies: data.results,
  //         totalPages: data.total_pages,
  //         totalResults: data.total_results
  //       }))
  //     })
  //   history.push('/search')
  }

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <input 
        onChange={handleChange} 
        type="text" 
        placeholder="Search Movie" 
      />
      <button type="submit">SEARCH</button>
    </form>
  )
};

export default SearchBar;