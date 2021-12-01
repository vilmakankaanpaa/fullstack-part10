import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const StatsItem = ({ name, value, testID }) => {

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center'
    }
  });

  const round = (value) => {
    
    return value >= 1000 
      ? <>{(value/1000).toFixed(1)}k</>
      : <>{value}</>;
  };

  return (
    <View style={styles.container}>
      <Text testID={testID} fontWeight="bold">{round(value)}</Text>
      <Text color='textSecondary'>{name}</Text>
    </View>
  );
};

export default StatsItem;
