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

const StatsList = ({ item, style }) => {

  return (
    <View style={style}>
      <StatsItem testID='forks' name='Forks' value={item.forksCount}/>
      <StatsItem testID='stars' name='Stars' value={item.stargazersCount}/>
      <StatsItem testID='reviews' name='Reviews' value={item.reviewCount}/>
      <StatsItem testID='rating' name='Rating' value={item.ratingAverage}/>
    </View>
  );

};

export default StatsList;
