import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const imgUrl = 'https://image.tmdb.org/t/p/w500/';

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className='card-link'>
      <img src={ imgUrl + movie.poster_path } alt={ movie.title } />
      <h2>{ movie.title }</h2>
      <p>
        <FaStar /> { movie.vote_average }
      </p>
      { showLink && <Link to={`/watch/${ movie.id }`} className='link'>Trailer</Link> }
      { showLink && <Link to={`/movie/${ movie.id }`} className='link'>Detalhes</Link> }
    </div>
  )
}

export default MovieCard;
