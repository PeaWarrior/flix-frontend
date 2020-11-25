import styled from 'styled-components';

const StyledHomePageSection = styled.section`
  width: 100vw;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 0 3rem;
    width: fit-content;
    text-align: center;

    span {
      color: ${({ theme }) => theme.primaryAccent};
      border-bottom: 2px solid ${({ theme }) => theme.secondaryAccent};
    }
  }

  h3 {
    margin-top: 3rem;
    width: fit-content;
  }
`

export default StyledHomePageSection;