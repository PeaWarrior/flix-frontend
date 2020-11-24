import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  margin: auto;
  width: 100%;
  max-width: 1024px;
  display: flex;
  
  h1 {
    margin: 0;
    font-size: clamp(2rem, 2.5vw, 3rem);
  }
  
  img {
    padding: 1rem;
    width: 15rem;
    border-right: 1px solid grey;
  }
  
  div {
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    h1 {
      margin-top: 1rem;
    }

    img {
      padding: 0;
      width: 100%;
      border: none;
    }
  }
`

export const StyledMetaList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  li {
    margin-right: 1.25rem;
    width: fit-content;
    display: flex;
    flex-direction: column;

    h4 {
      margin: 0;
      width: max-content;
      font-weight: 500;
      text-transform: capitalize;
    }

    p {
      margin: 0;
      font-weight: 300;
    }
  }
`

export const StyledButton = styled.button`
  margin-right: 1rem;
  font-size: 1rem;
  color: ${({ color }) => color};
  border: none;
  background: transparent;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`