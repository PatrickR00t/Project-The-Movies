import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';
import { fetchApiWatch } from '../services/getApi';
import ReactPlayer from 'react-player';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const {id} = useParams();

  const getMovie = async (url) => {
    const data = await fetchApiWatch(url);
    setMovie(data);
  };

  useEffect(() => {
    getMovie(id);
  }, [id]);

  return (
    <div>
      <div
        style={{
          textAlign: 'center',
          backgroundImage: `url('https://wallpaper.dog/large/5486331.jpg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          color: '#ffffff',
        }}
      >
      {movie && (
        <>
          <h2>{ movie.title }</h2>
          <div className='player'>
          {movie?.videos?.results[0]?.key === undefined ? (
            <h2>Infelizmente não temos o trailer 😅</h2>
          ) : (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
            />
          )}
          </div>
          <p>{ movie.tagline }</p>
          <div>
            <h2>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h2>
            <p>{ movie.overview }</p>
          </div>
        </>
      )}
      </div>
    </div>
  )
}

export default Movie;
