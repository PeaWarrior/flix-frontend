import React from 'react';
import { useHistory } from 'react-router-dom';

import StyledHeader from './Header.styled';

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  }

  return (
    <StyledHeader>
      <h1 onClick={handleClick}>FLIX</h1>
    </StyledHeader>
  )
}

export default Header;