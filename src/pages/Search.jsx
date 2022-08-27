import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { useSearchParams } from 'react-router-dom';
import { fetchApiSearch } from '../services/getApi';

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const getSearchedMovies = async (url) => {
    const data = await fetchApiSearch(url);
    setMovies(data.results);
  }

  useEffect(() => {
    getSearchedMovies(query);
  }, [query]);

  return (
    <div className='container-searched'>
      <h2 className='results-text'>Resultados para: <span className='query-text'>{ query }</span></h2>
      <div className='searched-movies'>
        { movies.length === 0
          ? <p>Carregando</p> : movies.map((movie) => (<MovieCard key={ movie.id } movie={ movie } />)) 
        }
      </div>
    </div>
  );
}

export default Search;
