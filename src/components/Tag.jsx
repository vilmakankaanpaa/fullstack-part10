import { View, StyleSheet } from "react-native";
import React from "react";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignSelf: 'flex-start',
    borderRadius: theme.borders.radius,
    backgroundColor: theme.colors.primary,
  }
});

const Tag = (props) => {
  return (
    <View style={styles.container}>
      <Text color='inverse' {...props}/>
    </View>
  );
};

export default Tag;