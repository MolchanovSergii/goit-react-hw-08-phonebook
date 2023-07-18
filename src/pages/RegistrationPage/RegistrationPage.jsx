import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Error, FormWrapper } from './RegistrationPageStyled';
import * as yup from 'yup';

const schema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username is too short')
    .required('Username is required'),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(2, 'Password is too short')
    .max(8, 'Password is too long'),
});

const initialValues = {
  login: '',
  password: '',
  username: '',
};

const RegistrationPage = () => {
  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
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
          <label htmlFor="username">
            Username
            <Field type="text" name="username" />
            <Error name="username" component="div" />
          </label>

          <label htmlFor="login">
            Login
            <Field type="email" name="login" />
            <Error name="login" component="div" />
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
