import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Error, FormWrapper } from './LoginPageStyled';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(2, 'Password is too short')
    .max(8, 'Password is too long'),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginPage = () => {
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
