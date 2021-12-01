import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});


const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);

  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError} 
        style={styles.input}
        {...props}
      />
      {showError && <Text color='error' style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;

// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { useField } from 'formik';

// import TextInput from './TextInput';
// import Text from './Text';
// import theme from '../theme';

// const styles = StyleSheet.create({
//   errorText: {
//     marginTop: 5,
//     color: theme.colors.error,
//   },
// });

// const FormikTextInput = ({ name, ...props }) => {
//   const [field, meta, helpers] = useField(name);
//   const showError = meta.touched && meta.error;

//   return (
//     <>
//       <TextInput
//         onChangeText={(value) => helpers.setValue(value)}
//         onBlur={() => helpers.setTouched(true)}
//         value={field.value}
//         error={showError}
//         {...props}
//       />
//       {showError && <Text style={styles.errorText}>{meta.error}</Text>}
//     </>
//   );
// };
// export default FormikTextInput;