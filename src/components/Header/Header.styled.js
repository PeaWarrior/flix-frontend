import styled from 'styled-components';

const StyledHeader = styled.nav`
  height: 4rem;
  width: 100vw;
  display: flex;
  justify-content: center;

  h1 {
    margin: 0;
    font-size: 3rem;
    color: ${({ theme }) => theme.primaryAccent};
    border-bottom: 3px solid ${({ theme }) => theme.secondaryAccent};

    &:hover {
      cursor: pointer;
      text-shadow: 0 0 10px ${({ theme }) => theme.secondaryAccent};
    }
  }
`

export default StyledHeader;