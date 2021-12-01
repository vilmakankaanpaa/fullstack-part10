import React from 'react';
//import { StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  
  const textInputStyle = [style];
  error 
    ? textInputStyle.push({ borderColor: theme.colors.error})
    : textInputStyle.push({ borderColor: theme.colors.textSecondary});


  return <NativeTextInput 
    style={textInputStyle} 
    {...props} />;
};

export default TextInput;

// import React from 'react';
// import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

// import theme from '../theme';

// const styles = StyleSheet.create({
//   textInput: {
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderStyle: 'solid',
//     fontSize: theme.fontSizes.body,
//     fontFamily: theme.fonts.main,
//     color: theme.colors.textPrimary,
//     borderRadius: theme.roundness,
//     borderColor: '#aab2bb',
//   },
//   error: {
//     borderColor: theme.colors.error,
//   }
// });

// const TextInput = ({ style, error, ...props }) => {
//   const textInputStyle = [
//     styles.textInput,
//     error && styles.error,
//     style,
//   ];

//   return <NativeTextInput style={textInputStyle} {...props} />;
// };

// export default TextInput;