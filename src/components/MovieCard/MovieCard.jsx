import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BsCardImage } from 'react-icons/bs';

import {
  MoviePoster,
  Card,
  Wrapper,
  GenresList,
  Arrow,
  LinkBack,
} from './MovieCardStyled';

const MovieCard = ({ data }) => {
  const { overview, genres, poster_path, title, release_date, vote_average } =
    data;
  const baseImagePath = 'https://image.tmdb.org/t/p/w500';
  const year = parseInt(release_date.split('-')[0]);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/movies');

  return (
    <>
      <LinkBack to={backLinkHref.current}>
        <Arrow />
        Go Back
      </LinkBack>
      <Card>
        <Wrapper>
          {poster_path ? (
            <MoviePoster
              src={`${baseImagePath}${poster_path}`}
              alt="Movie Poster"
            />
          ) : (
            <BsCardImage size={200} />
          )}
        </Wrapper>
        <Wrapper>
          <h2>
            {title} ({year})
          </h2>
          <p>User Rating: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </GenresList>
        </Wrapper>
      </Card>
    </>
  );
};

export default MovieCard;
