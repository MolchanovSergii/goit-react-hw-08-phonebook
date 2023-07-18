import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchApiMovie } from 'services/fetchApi';

import Loader from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { TitleBottom } from 'components/MovieCard/MovieCardStyled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataApi = await fetchApiMovie(movieId);

        setData(dataApi);
        setIsLoading(false);
      } catch (error) {
        Notify.failure(`Sorry, something went wrong. ${error.message}`);
      }
    };
    fetchData();
  }, [movieId]);

  return (
    <>
      {isLoading ? <Loader /> : data && <MovieCard data={data} />}
      <TitleBottom>
        <h3>Additional information</h3>
      </TitleBottom>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
