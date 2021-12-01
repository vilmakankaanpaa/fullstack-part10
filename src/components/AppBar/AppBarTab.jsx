import React from "react";
import { Pressable } from "react-native";
import Text from "../Text";

const AppBarTab = ({onPress, text, styles, ...props} ) => {
  return (
    <Pressable style={styles} onPress={onPress}>
      <Text 
        fontSize='tab' 
        fontWeight="bold"
        color='inverse'
        {...props}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;