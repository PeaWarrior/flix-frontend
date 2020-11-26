import styled from 'styled-components';

export const StyledMovieContainer = styled.section`
  min-height: calc(100vh - 17rem);
  flex-direction: column;
  align-items: center;

  span {
    color: ${({ theme }) => theme.secondaryAccent};
    border-bottom: 2px solid ${({ theme }) => theme.primaryAccent};
  }

  .movies-list {
    display: flex;
    flex-wrap: wrap;
  }
`