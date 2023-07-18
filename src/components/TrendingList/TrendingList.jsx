import { Link, useLocation } from 'react-router-dom';

const TrendingList = ({ data }) => {
  const { results } = data;
  const location = useLocation();

  return (
    <ul>
      {results.map(result => (
        <li key={result.id}>
          <Link to={`/movies/${result.id}`} state={{ from: location }}>
            {result.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TrendingList;
