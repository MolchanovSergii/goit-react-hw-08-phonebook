import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import { Container, Header, Link, Navigation } from './SharedLayoutStyled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
