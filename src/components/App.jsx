import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';

import SharedLayout from './SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/authOperations';

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

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
};
