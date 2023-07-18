import { useState, useEffect } from 'react';
import { fetchApi } from 'services/fetchApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import TrendingList from 'components/TrendingList/TrendingList';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataApi = await fetchApi();

        setData(dataApi);
        setIsLoading(false);
      } catch (error) {
        Notify.failure(`Sorry, something went wrong. ${error.message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending Today</h1>
      {isLoading ? <Loader /> : data && <TrendingList data={data} />}
    </main>
  );
};

export default Home;
