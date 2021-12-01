import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories }) => {

  let history = useHistory();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  const redirect = (to) => {
    console.log('redirecting to ',to);
    history.push(to);
  };


  const renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => redirect(`/${item.id}`)}>
        <RepositoryItem 
          key={item.id}
          item={item}
        />
      </Pressable>
    );
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
    />
  );
};

const RepositoryList = () => {

  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
  
};

export default RepositoryList;