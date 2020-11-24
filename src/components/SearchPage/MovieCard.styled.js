import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  width: 250px;
  height: 450px;
  border: 1px solid pink;
  
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 371px;
    box-sizing: border-box;
    border: 1px grey solid;
  }

  h4 {
    padding: 0 0.5rem;
  }
`