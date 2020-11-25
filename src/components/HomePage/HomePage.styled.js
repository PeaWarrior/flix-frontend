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
    text-align: center;
  }

  .movies-carousel {
    margin-bottom: 2rem;
    padding: 1rem;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    border-top: 1px solid ${({ theme }) => theme.secondaryAccent};
    border-bottom: 1px solid ${({ theme }) => theme.secondaryAccent};
    /* border-radius: 10px; */

    div {
      margin: 0;
    }

    img {
      width: 250px;
    }
  }
`

export default StyledHomePageSection;