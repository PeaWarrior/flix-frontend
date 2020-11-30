import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { StyledSearchBarContainer, StyledSearchBar } from './SearchBar.styled';
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search/${query}`);
  }

  return (
    <StyledSearchBarContainer>

    <StyledSearchBar onSubmit={handleSubmit}>
      <div>
        <input 
          onChange={handleChange} 
          type='text' 
          placeholder='Search Movie' 
          name='searchbar'
        />
        <button type='submit'><FaSearch /></button>
      </div>
    </StyledSearchBar>
    </StyledSearchBarContainer>
  )
};

export default SearchBar;