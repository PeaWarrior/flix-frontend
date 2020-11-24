import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { 
  StyledMovieSection, 
  StyledMetaList, 
  StyledButton 
} from './MoviePage.styled';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

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
        <li key={data}>
          <h4>{data}</h4>
          <p>{state[data]}</p>
        </li>
    ));
  };

  const updateLikes = (change) => {
    fetch(`${URL}movies/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          change: change
        })
      })
      .then(resp => resp.json())
      .then(data => {
        setState(prevState => ({
          ...prevState,
          ...data
        }))
      })
  }

  const handleClickLikes = () => {
    updateLikes('like');
  };

  const handleClickDislikes = () => {
    updateLikes('dislike');
  };

  return (
    <StyledMovieSection>
      <img src={state.poster} alt="" />
      <div>
        <h1>{state.title}</h1>
        <hr/>
        <StyledMetaList>{renderMetaData()}</StyledMetaList>
        <StyledButton onClick={handleClickLikes} color={'green'}>
          <FaRegThumbsUp />
          {state.likes}
        </StyledButton> 

        <StyledButton onClick={handleClickDislikes} color={'red'}>
          <FaRegThumbsDown />
          {state.dislikes}
        </StyledButton>
        <p>{state.overview}</p>
      </div>
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