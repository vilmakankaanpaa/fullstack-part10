import React from "react";
import { StyleSheet } from 'react-native';
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3
  }
});

const Subheading = ({ ...props }) => {
  return (
    <Text style={styles.container} fontWeight="bold" fontSize="subheading" {...props}/>
  );
};

export default Subheading;