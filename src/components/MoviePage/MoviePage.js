import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { StyledMovieSection, StyledMetaItem, StyledMetaList, StyledButton } from './MoviePage.styled';

const MoviePage = () => {
  const { id } = useParams();
  const [state, setState] = useState(initialState);

  useEffect(() => {
    fetch(`${URL}movies/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setState({...data});
      })
  }, []);

  const renderMetaData = () => {
    const metaData = ['director', 'runtime', 'released'];

    return metaData.map(data => (
        <StyledMetaItem key={data}>
          <h4>{data}</h4>
          <p>{state[data]}</p>
        </StyledMetaItem>
    ));
  };

  const handleClick = (event) => {
    console.log(event.target.id)
    fetch(`${URL}movies/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        [event.target.id]: 1
      })
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  };

  return (
    <StyledMovieSection>
      <img src={state.poster} alt="" />
      <h1>{state.title}</h1>
      <StyledMetaList>
        {renderMetaData()}
      </StyledMetaList>
      <StyledButton onClick={handleClick} id="like">Like</StyledButton>
      <StyledButton onClick={handleClick} id="dislike">Dislike</StyledButton>
      <p>{state.overview}</p>
    </StyledMovieSection>
  )
}

const initialState = {
  movie_id: null,
  title: null,
  director: null,
  overview: null,
  runtime: null,
  released: null,
  backdrop: null,
  poster: null,
}

export default MoviePage