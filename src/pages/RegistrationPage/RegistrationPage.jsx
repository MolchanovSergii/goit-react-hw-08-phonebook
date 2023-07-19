import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Error, FormWrapper } from './RegistrationPageStyled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Username is too short')
    .required('Username is required'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(7, 'Password is too short')
    .max(16, 'Password is too long'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
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
          <label htmlFor="name">
            Username
            <Field type="text" name="name" />
            <Error name="name" component="div" />
          </label>
          <label htmlFor="email">
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

export default RegistrationPage;
