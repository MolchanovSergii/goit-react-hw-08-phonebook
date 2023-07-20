import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import Loader from './Loader/Loader';
import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { PrivateRoute } from 'routes/PrivateRoute';
import { RestrictedRoute } from 'routes/RestrictedRoute';
// import Home from 'pages/Home/Home';
// import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
// import LoginPage from 'pages/LoginPage/LoginPage';
// import ContactsPage from 'pages/ContactsPage/ContactsPage';

// const SharedLayout = lazy(() =>
//   import('../components/SharedLayout/SharedLayout')
// );
const Home = lazy(() => import('../pages/Home/Home'));
const RegistrationPage = lazy(() =>
  import('../pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(authSelectors.selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
