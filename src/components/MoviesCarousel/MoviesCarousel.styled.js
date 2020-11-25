import styled from 'styled-components';

const StyledMoviesCarousel = styled.div`
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  max-width: 100vw;
  height: 500px;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  border-top: 3px solid ${({ theme }) => theme.primaryAccent};
  border-bottom: 3px solid ${({ theme }) => theme.primaryAccent};

  div {
    margin: 0;
  }

`

export default StyledMoviesCarousel;