import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useHistory } from "react-router-native";
import Constants from 'expo-constants';
import { useQuery } from '@apollo/client';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import theme from '../theme';
import Text from './Text';

import { AUTHORIZED_USER } from '../graphql/queries';

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

const AppBarTab = ({onPress, text, ...props} ) => {
  return (
    <Pressable style={styles.tabItem} onPress={onPress}>
      <Text 
        color= 'inverse' 
        fontSize='tab' 
        fontWeight="bold"
        {...props}>{text}</Text>
    </Pressable>
  );
};

const AppBar = () => {
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  let history = useHistory();

  const result = useQuery(AUTHORIZED_USER);
  let authorized = false;
  if (!result.loading) {
    authorized = result.data.authorizedUser ? true : false;
  }

  const handleLogOut = async() => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/');
  };

  const redirect = (to) => {
    history.push(to);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab onPress={() => redirect('/')} text='Repositories'/>
        {!authorized && <AppBarTab onPress={() => redirect('/signin')} text='Sign-in'/>}
        {authorized && <AppBarTab onPress={() => handleLogOut()} text='Log-out'/>}
      </ScrollView>
    </View>
  );
};

export default AppBar;