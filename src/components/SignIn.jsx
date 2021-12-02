import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import Button from './Button';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 15
  },
  fieldContainer: {
    marginBottom: 15,
  }
});

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const SignInForm = ({ onSubmit }) => {

  return (
    <View style={styles.form}>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='usernameField' name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput secureTextEntry testID='passwordField' name="password" placeholder="Password"/>
      </View>
      <Button testID='submitButton' onPress={onSubmit}>Sign in</Button>
    </View>
  );
};

export const FormikForm =({ onSubmit }) => (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
);

const SignIn = () => {
  const [signIn] = useSignIn();

  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const data = await signIn({ username, password });
      if (data) {
        history.push('/');
      }
    } catch (e) {
      console.log('e:', e);
    }
  };

  return (
    <FormikForm onSubmit={onSubmit} />
  );
};

export default SignIn;