import React from 'react';
import { View, StyleSheet } from 'react-native';

import StatsList from './StatsList';
import ProfileInfo from './ProfileInfo';
import theme from '../theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.itemBackground,
    display: 'flex',
  },
  mainBox: {
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  statsBox: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
});

const RepositoryItem = ({ item }) => {

  return (
    <View style={styles.item}>
      <ProfileInfo containerStyle={styles.mainBox} item={item}/>
      <StatsList style={styles.statsBox} item={item}/>
    </View>
  );
};

export default RepositoryItem;