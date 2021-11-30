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