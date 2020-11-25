import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../utilities/constants';

import { 
  StyledMovieSection, 
  StyledMetaList, 
  StyledButton 
} from './MoviePage.styled';
import MoviesCarousel from '../MoviesCarousel/MoviesCarousel';
import { FaRegThumbsUp, FaRegThumbsDown } from 'react-icons/fa';

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(initialMovie);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    fetch(`${URL}movies/${id}`)
      .then(resp => resp.json())
      .then(data => {
        setMovie({...data.movie});
        setRecommendedMovies([...data.recommended]);
      })
  }, []);

  const renderMetaData = () => {
    const metaData = ['director', 'runtime', 'released'];

    return metaData.map(data => (
        <li key={data}>
          <h4>{data}</h4>
          <p>{movie[data]}</p>
        </li>
    ));
  };

  const handleClickLikes = (event) => {
    const change = event.target.getAttribute('data-liketype');
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
        setMovie(prevMovie => ({
          ...prevMovie,
          ...data
        }))
      })
  }

  return (
    <>
    <StyledMovieSection>
      <div className='query-movie'>
        <img src={movie.poster} alt={`poster of ${movie.title}`} />
        <div className='content'>

          <div>
            <h1>{movie.title}</h1>
            <hr/>
            <StyledMetaList>{renderMetaData()}</StyledMetaList>
            <p>{movie.overview}</p>
          </div>

          <div className='buttons'>
            <StyledButton 
              onClick={handleClickLikes} 
              data-liketype='like' 
              color={'green'}
            >
              <FaRegThumbsUp />
              {movie.likes}
            </StyledButton> 

            <StyledButton 
              onClick={handleClickLikes} 
              data-liketype='dislike' 
              color={'red'}
            >
              <FaRegThumbsDown />
              {movie.dislikes}
            </StyledButton>
          </div>

        </div>
      </div>

      <h3>Recommended Movies</h3>

      <MoviesCarousel movies={recommendedMovies} />
      
    </StyledMovieSection>
    </>
  )
}

const initialMovie = {
  movie_id: null,
  title: null,
  director: null,
  overview: null,
  runtime: null,
  released: null,
  backdrop: null,
  poster: null,
}

export default MoviePage;