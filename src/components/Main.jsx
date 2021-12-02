import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, useRouteMatch } from 'react-router-native';
import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import theme from '../theme';
import SignIn from './SignIn';
import useRepositories from '../hooks/useRepositories';
import SingleRepository from './SingleRepository';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {

  const { repositories } = useRepositories();

  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];

  const repoMatch = useRouteMatch('/:id');
  const repository = repoMatch
    ? repositoryNodes.find(repo => repo.id === repoMatch.params.id)
    : null;

  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        
        <Route path="/" exact>
          <RepositoryList />
        </Route>
      
        <Route path="/signin">
          <SignIn />
        </Route>

        <Route path="/:id" >
          {/* <RepositoryItem item={repo} singleView={true}/> */}
          <SingleRepository repository={repository} />
        </Route>

      </Switch>
    </View>
  );
};

export default Main;