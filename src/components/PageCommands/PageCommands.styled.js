import styled from 'styled-components';

export const StyledPageCommands = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 ;
    width: 5rem;
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 1rem;
  }
`

export const StyledPageButton = styled.button`
  border: none;
  background: transparent;
  font-size: 1.5rem;
  color: ${({ disabled, theme }) => disabled ? theme.primaryFont : theme.primaryAccent};
  outline: none;

  &:hover {
  cursor: ${({ disabled }) => disabled ? 'initial' : 'pointer'};
  }

  svg {
    pointer-events: none;
  }
`