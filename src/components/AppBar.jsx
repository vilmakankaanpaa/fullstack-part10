import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { Link } from 'react-router-native';
import Constants from 'expo-constants';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 20,
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.appBarBackground,
  },
  tabItem: {
    padding: 5,
    flexGrow: 0,
  },
});

const AppBarTab = ({linkTo='/', onPress=null, ...props} ) => {
  return (
    <Pressable style={styles.tabItem} onPress={onPress}>
      <Link to={linkTo}>
        <Text 
          color= 'inverse' 
          fontSize='tab' 
          fontWeight="bold"
          {...props} 
        />
      </Link>
    </Pressable>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab onPress={() => console.log('Repositories ->')}
          linkTo='/'>Repositories
        </AppBarTab>
        <AppBarTab  onPress={() => console.log('Signing ->')}
          linkTo='/signin'>Sign-in
        </AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;