import { LinkBack, Arrow } from 'components/MovieCard/MovieCardStyled';

const NotFound = () => {
  return (
    <>
      <LinkBack to="/">
        <Arrow />
        Go Home
      </LinkBack>
      <h2>Sorry.Page not found</h2>
    </>
  );
};

export default NotFound;
