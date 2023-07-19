import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Error, FormWrapper } from './LoginPageStyled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(7, 'Password is too short')
    .max(16, 'Password is too long'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormWrapper>
          <label htmlFor="login">
            Email
            <Field type="email" name="email" />
            <Error name="email" component="div" />
          </label>
          <label htmlFor="password">
            Password
            <Field type="password" name="password" />
            <Error name="password" component="div" />
          </label>
          <button type="submit">Log In</button>
        </FormWrapper>
      </Form>
    </Formik>
  );
};

export default LoginPage;
