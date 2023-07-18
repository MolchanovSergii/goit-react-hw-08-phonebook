import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { fetchApiMovieSearch } from 'services/fetchApi';

import Loader from 'components/Loader/Loader';
import TrendingList from 'components/TrendingList/TrendingList';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // делает проверку, если там null, то ставит ''
  const query = searchParams.get('query') ?? '';

  const handlerSubmitForm = event => {
    event.preventDefault();
    const form = event.currentTarget;
    setSearchParams({ query: form.elements.query.value });
  };

  // const handlerChangeQuery = event => {
  //   const value = event.target.value;
  //   const currentValue = value !== '' ? value : [];
  //   setSearchParams({ query: currentValue });
  // };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const dataApi = await fetchApiMovieSearch(query);

        setData(dataApi);
        setIsLoading(false);
      } catch (error) {
        Notify.failure(`Sorry, something went wrong. ${error.message}`);
      }
    };
    fetchData();
  }, [query]);

  return (
    <main>
      <h1>Movies</h1>
      <form onSubmit={handlerSubmitForm}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          // value={query}
          // onChange={handlerChangeQuery}
        />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <Loader />
      ) : query !== null && data && data.results.length ? (
        <TrendingList data={data} />
      ) : (
        <p>No movies found</p>
      )}
    </main>
  );
};

export default Movies;
