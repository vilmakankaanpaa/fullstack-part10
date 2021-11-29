import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: theme.colors.appBarBackground,
  },
  tabItem: {
    padding: 5,
    flexGrow: 0,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Repositories')}>
        <AppBarTab style={styles.tabItem}>Repositories</AppBarTab>
      </Pressable>
      <Pressable onPress={() => console.log('Other')}>
        <AppBarTab style={styles.tabItem}>Other</AppBarTab>
      </Pressable>
    </View>
  );
};

export default AppBar;