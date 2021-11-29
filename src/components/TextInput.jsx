import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput as NativeTextInput } from 'react-native';
import theme from '../theme';

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  const styles = StyleSheet.create({
    inputError: {
      color: theme.colors.error
    },
    input: {
      color: theme.colors.textSecondary
    }
  });

  return <NativeTextInput 
    style={textInputStyle} 
    borderColor={error ? styles.inputError.color : styles.input.color}
    {...props} />;
};

export default TextInput;