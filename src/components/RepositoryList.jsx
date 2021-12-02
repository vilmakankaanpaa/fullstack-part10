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

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component{

  renderHeader = () => {
    const { SortingSelector } = this.props;

    return <SortingSelector />;
  };

  renderItem = ({ item }) => {
    return (
      <Pressable onPress={() => this.props.history.push(`/${item.id}`)}>
        <RepositoryItem 
          key={item.id}
          item={item}
        />
      </Pressable>
    );
  };
  
  render() {
  
    return (
      <FlatList
        data={this.props.repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={this.renderItem}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

const RepositoryList = () => {

  const [sorting, setSorting] = useState('Latest repositories');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchKeyword] = useDebounce(searchQuery, 1000);
  const history = useHistory();
  const { repositories } = useRepositories(sorting, searchKeyword);

  const repositoryNodes = repositories
  ? repositories.edges.map((edge) => edge.node)
  : [];


  const onChangeSearch = query => setSearchQuery(query);

  const props = {
    sorting, setSorting, searchQuery, onChangeSearch
  };

  return <RepositoryListContainer repositoryNodes={repositoryNodes} SortingSelector={() => SortingSelector(props)} history={history} />;
  
};

export default RepositoryList;