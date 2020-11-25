import styled from 'styled-components';

export const StyledMovieSection = styled.section`
  display: flex;
  flex-direction: column;

  h3 {
    padding-left: 1rem;
  }

  .query-movie {
    margin-bottom: 2rem;
    display: flex;

    h1 {
      margin: 0;
      font-size: clamp(2rem, 2.5vw, 3rem);
    }
    
    img {
      padding: 1rem;
      width: 250px;
      height: 371px;
      border-right: 1px solid grey;
    }
    
    .content {
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .buttons {
      margin-bottom: 4rem;
      display: flex;
      flex-direction: row;

      svg {
        pointer-events: none;
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
      
      h1 {
        margin-top: 1rem;
      }
      
      img {
        padding: 0;
        width: 250px;
        height: 371px;
        border: none;
      }
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
  margin-right: 2rem;
  width: 3.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 1rem;
  color: ${({ color }) => color};
  border: none;
  background: transparent;
  outline: none;

  &:hover {
    cursor: pointer;
  }
`