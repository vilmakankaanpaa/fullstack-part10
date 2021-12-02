import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
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

const options = {
  direction: {
    ascending: 'ASC',
    descending: 'DESC'
  },
  by: {
    creationDate: 'CREATED_AT',
    averageRating: 'RATING_AVERAGE'
  }
};

const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ 
  repositories, 
  SortingSelector,
  onEndReach
 }) => {

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
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {

  const [sorting, setSorting] = useState('Latest repositories');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 1000);

  const {direction, by} = options;

  let orderBy, orderDirection;
  if (sorting === 'Latest repositories') {
    orderBy = by.creationDate;
    orderDirection = direction.descending;
  } else if (sorting === 'Highest rated repositories') {
    orderBy = by.averageRating;
    orderDirection = direction.descending;
  } else if (sorting === 'Lowest rated repositories') {
    orderBy = by.averageRating;
    orderDirection = direction.ascending;
  } 

  const { repositories, fetchMore } = useRepositories({first: 12, orderBy, orderDirection, searchKeyword});

  const onChangeSearch = query => setSearchQuery(query);

  const props = {
    sorting, setSorting, searchQuery, onChangeSearch
  };

  const onEndReach = () => {
    console.log('You have reached the end of the list');
    fetchMore();
  };

  return <RepositoryListContainer
      repositories={repositories} 
      SortingSelector={() => SortingSelector(props)} 
      onEndReach={onEndReach}
    />;
  
};

export default RepositoryList;