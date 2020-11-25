import styled from 'styled-components';

export const StyledMovieCard = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  width: 250px;
  height: 450px;
  border: 1px solid pink;
  
  &:hover {
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 371px;
    box-sizing: border-box;
    border: 1px grey solid;
  }

  .placeholder {
    width: 100%;
    height: 371px;
    box-sizing: border-box;
    border: 1px grey solid;
    background: url('https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg') no-repeat center;
  }

  h4 {
    padding: 0 0.5rem;
  }
`