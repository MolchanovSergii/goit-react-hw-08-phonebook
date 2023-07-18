import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchApiMovieReviews } from 'services/fetchApi';

import Loader from 'components/Loader/Loader';
import ReviewsCard from './ReviewsCard';

const Reviews = () => {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataApi = await fetchApiMovieReviews(movieId);

        setData(dataApi);
        setIsLoading(false);
      } catch (error) {
        Notify.failure(`Sorry, something went wrong. ${error.message}`);
      }
    };
    fetchData();
  }, [movieId]);

  return <>{isLoading ? <Loader /> : data && <ReviewsCard reviews={data} />}</>;
};

export default Reviews;
