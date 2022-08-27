import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill
} from 'react-icons/bs';
import MovieCard from '../components/MovieCard';
import { fetchApiDetails } from '../services/getApi';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const {id} = useParams();

  const getMovie = async (url) => {
    const data = await fetchApiDetails(url);
    setMovie(data);
  }

  const formatCurrency = (number) => {
    return number.toLocaleString('en-us', {
      style: 'currency',
      currency: 'USD',
    })
  }

  useEffect(() => {
    getMovie(id);
  }, [id])

  return (
    <div className='movie-details'>
      {movie && (
        <>
          <MovieCard movie={ movie } showLink={false} />
          <p>{ movie.tagline }</p>
          <div>
            <h2>
              <BsWallet2 /> Orçamento:
            </h2>
            <p>{ formatCurrency(movie.budget) }</p>
          </div>
          <div>
            <h2>
              <BsGraphUp /> Receita:
            </h2>
            <p>{ formatCurrency(movie.revenue) }</p>
          </div>
          <div>
            <h2>
              <BsHourglassSplit /> Duração:
            </h2>
            <p>{ movie.runtime } minutos</p>
          </div>
          <div>
            <h2>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h2>
            <p>{ movie.overview }</p>
          </div>
        </>
      )}
    </div>
  )
}

export default Movie;
