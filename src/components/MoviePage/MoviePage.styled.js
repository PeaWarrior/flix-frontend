import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  padding: 6.25%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
  }
`

export const StyledMetaItem = styled.li`
  width: fit-content;
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    width: max-content;
    text-transform: capitalize;
  }

  p {
    margin: 0;
  }
`

export const StyledMetaList = styled.ul`
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const StyledButton = styled.button`
  border: 1px solid black;
`