import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { fetchApi } from '../services/getApi';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetchApi();
    const mvs = response.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
      };
    });
    setMovies(mvs);
  }

  useEffect(() => {
    getMovies();
  }, [])
  
  return(
    <div className='container-movie'>
      <h2 className='title'>Filmes:</h2>
      <div className='movies-cards'>
        { movies.length === 0
          ? <p>Carregando</p> : movies.map((movie) => (<MovieCard key={ movie.id } movie={ movie } />)) 
        }
      </div>
    </div>
  );
}

export default Home;
