import styled from 'styled-components';

export const StyledSearchBarContainer = styled.section`
  justify-content: center;
`

export const StyledSearchBar = styled.form`
  height: 10rem;
  display: flex;
  align-items: center;

  div {
    padding: 0;
    border: 1px solid ${({ theme }) => theme.primaryFont};
    border-radius: 5px;
    overflow: hidden;

    input {
      padding: 0.5rem;
      font-size: 1rem;
      border: none;
      outline: none;
    }
    button {
      padding: 0.6rem;
      font-size: 1rem;
      color: ${({ theme }) => theme.secondaryAccent};
      border: none;
      outline: none;
      
      &:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.primaryAccent};
      }
    }
  }

`