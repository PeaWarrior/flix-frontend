import styled from 'styled-components';

const StyledPageCommands = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;

  div {
    margin: 0 3rem;
    width: 7.5rem;
    display: flex;
    justify-content: space-between;

    button {
      border: none;
      background: transparent;
      font-size: 1.5rem;

      svg {
        pointer-events: none;
      }
    }
  }
`
export default StyledPageCommands;