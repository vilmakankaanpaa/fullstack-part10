import React from "react";
import { Image, StyleSheet, View } from 'react-native';
import theme from "../theme";

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: theme.borders.radius,
  },
});

const Avatar = ({ imageUri, containerStyle }) => {
  return (
    <View style={containerStyle}>
      <Image style={styles.avatar} source={{uri: imageUri }}/>
    </View>
  );
};

export default Avatar;