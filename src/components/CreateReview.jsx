import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useHistory } from "react-router-native";
import { useMutation } from '@apollo/client';
import { Formik } from 'formik';
import * as yup from 'yup';
import FormikTextInput from './FormikTextInput';
import Button from './Button';

import { CREATE_REVIEW } from '../graphql/mutations';

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
  repositoryOwner: '',
  repositoryName: '',
  rating: '',
  reviewText: ''
};

const validationSchema = yup.object().shape({
  repositoryOwner: yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .integer('Rating must be an integer value')
    .min(0)
    .max(100)
    .required('Rating is required'),
  password: yup
    .string(),
});


const ReviewForm = ({ onSubmit }) => {

  return (
    <View style={styles.form}>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='repositoryOwnerField' name="repositoryOwner" placeholder="Name of repository owner" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='repositoryNameField' name="repositoryName" placeholder="Name of repository"/>
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='ratingField' name="rating" placeholder="Rating" />
      </View>
      <View style={styles.fieldContainer}>
        <FormikTextInput testID='reviewTextField' name="reviewText" placeholder="Review" multiline={true}/>
      </View>
      <Button testID='submitReviewButton' onPress={onSubmit}>Create review</Button>
    </View>
  );
};

const CreateReview = () => {


  const [ createReview ] = useMutation(CREATE_REVIEW);

  let history = useHistory();

  const onSubmit = async (values) => {
    const { repositoryOwner, repositoryName, rating, reviewText } = values;

    console.log(values);
    console.log(rating, Number(rating));

    try{
      const response = await createReview({ 
        variables: {
          ownerName: repositoryOwner, 
          repositoryName: repositoryName, 
          rating: Number(rating), 
          text: reviewText 
        }
      });

      if (response.data) {
        const repositoryId = response.data.createReview.repositoryId;
        history.push(`/${repositoryId}`);
      }

    } catch (e) {
      console.log(e);
    }
    
  };

  return (
    <View>
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default CreateReview;