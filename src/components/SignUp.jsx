import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Button from './Button';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../graphql/mutations';

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
    .min(1)
    .max(30)
    .required('Username is required'),
  password: yup
    .string()
    .min(5)
    .max(50)
    .required('Password is required'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null])
    .required('Password confirmation is required')
});

const SignUpForm = ({ onSubmit }) => {

  return (
    <View style={styles.form}>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='setUsernameField' name="username" placeholder="Username" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput secureTextEntry testID='setPasswordField' name="password" placeholder="Password"/>
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput secureTextEntry testID='confirmPasswordField' name="passwordConfirmation" placeholder="Confirm password"/>
      </View>
      <Button testID='submitButton' onPress={onSubmit}>Sign up</Button>
    </View>
  );
};

export const FormikForm =({ onSubmit }) => (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
);

const SignUp = () => {
  
  const [ createUser ] = useMutation(CREATE_USER);

  let history = useHistory();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await createUser({ 
        variables: {
          username, 
          password 
        }
      });

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

export default SignUp;