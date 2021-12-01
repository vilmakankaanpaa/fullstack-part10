import React from "react";
import { Pressable, View } from "react-native";
import { useQuery } from "@apollo/client";
import Text from "./Text";
import * as Linking from 'expo-linking';

import { GET_REPOSITORY } from "../graphql/queries";

const LinkButton = ({buttonStyle, textStyle, itemId}) => {

  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id: itemId }
  });

  const repository = data ? data.repository : undefined;

  const handlePress = () => {
    
    repository ? Linking.openURL(repository.url) : null;
  };

  return (
    <View style={buttonStyle}>
      <Pressable onPress={handlePress}>
        <Text style={textStyle}>Open in GitHub</Text>
      </Pressable>
    </View>
  );
};

export default LinkButton;