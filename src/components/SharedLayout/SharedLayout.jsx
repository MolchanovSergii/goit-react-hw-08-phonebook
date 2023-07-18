import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from 'components/Loader/Loader';
import HeadNavigation from 'components/HeadNavigation/HeadNavigation';
import { Container, Header } from './SharedLayoutStyled';
import AuthNavigation from 'components/AuthNavigation/AuthNavigation';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <HeadNavigation />
        <AuthNavigation />
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
