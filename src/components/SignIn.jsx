import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    padding: 10
  },
  button: {
    height: 50,
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    padding: 5,
    alignSelf: 'center',
    fontSize: 16
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
      <FormikTextInput testID='usernameField' name="username" placeholder="Username" />
      <FormikTextInput secureTextEntry testID='passwordField' name="password" placeholder="Password"/>
      <Pressable testID='submitButton' onPress={onSubmit} style={styles.button}>
        <Text fontWeight='bold' color='inverse' style={styles.buttonText}>Sign in</Text>
      </Pressable>
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
        // auth successful --> redirect
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