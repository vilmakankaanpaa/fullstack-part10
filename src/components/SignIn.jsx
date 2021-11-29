import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    padding: 10
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
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
      <FormikTextInput name="username" placeholder="Username" style={styles.input}/>
      <FormikTextInput secureTextEntry name="password" placeholder="Password" style={styles.input}/>
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontWeight='bold' color='inverse' style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;