import React, { useState } from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from "react-router-native";

import RepositoryItem from './RepositoryItem';
import useRepositories from '../hooks/useRepositories';
import SortingSelector from './SortingSelector';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, SortingSelector }) => {

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
      ListHeaderComponent={() => <SortingSelector />}
    />
  );
};

const RepositoryList = () => {

  // const [orderBy, setOrderBy] = useState('CREATED_AT');
  // const [orderDirection, setOrderDirection] = useState('ASC');

  const [sorting, setSorting] = useState('Latest repositories');

  const { repositories } = useRepositories(sorting);

  const props = {
    sorting, setSorting
  };

  return <RepositoryListContainer repositories={repositories} SortingSelector={() => SortingSelector(props)} />;
  
};

export default RepositoryList;