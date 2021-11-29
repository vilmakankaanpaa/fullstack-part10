import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.appBarBackground,
  },
  tabItem: {
    padding: 5,
    flexGrow: 0,
  },
});

const AppBarTab = (props) => {
  return (
    <Text 
      color= 'tab' fontSize='tab' fontWeight="bold"
      {...props} 
    />
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('Repositories')}>
        <AppBarTab style={styles.tabItem}>Repositories</AppBarTab>
      </Pressable>
    </View>
  );
};

export default AppBar;