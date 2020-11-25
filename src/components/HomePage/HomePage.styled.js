import styled from 'styled-components';

const StyledHomePageSection = styled.section`
  flex-direction: column;
  align-items: center;

  h2 {
    width: fit-content;
    text-align: center;

    span {
      color: ${({ theme }) => theme.primaryAccent};
      border-bottom: 2px solid ${({ theme }) => theme.secondaryAccent};
    }
  }

  h3 {
    width: fit-content;
    text-align: center;
  }
`

export default StyledHomePageSection;