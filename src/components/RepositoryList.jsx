import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { useQuery } from '@apollo/client';

import RepositoryItem from './RepositoryItem';

import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

  const result = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });    

  let repositoryNodes = [];
  if (result.data) {
    repositoryNodes = result.data.repositories.edges.map(item => item.node);
    console.log(repositoryNodes);
  }

  const renderItem = ({ item }) => {
    return (
      <RepositoryItem key={item.id}
        item={item}
      />
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

export default RepositoryList;