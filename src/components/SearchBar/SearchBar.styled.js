import styled from 'styled-components';

export const StyledSearchBarContainer = styled.section`
  justify-content: center;
`

export const StyledSearchBar = styled.form`
  height: 10rem;
  display: flex;
  align-items: center;

  input {
    padding: 1rem;
    font-size: 1rem;
    border: 1px solid ${({ theme }) => theme.primaryFont};
    border-right: none;
    border-radius: 10px 0 0 10px;
    outline: none;
  }
  button {
    padding: 0.6rem 1rem;
    margin: 0;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.primaryFont};
    border: 1px solid ${({ theme }) => theme.primaryFont};
    border-radius: 0 10px 10px 0;
    border-left: none;

    &:hover {
      cursor: pointer;
    }
  }
`