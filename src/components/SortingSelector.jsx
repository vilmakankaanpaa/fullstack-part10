import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Searchbar } from 'react-native-paper';
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  picker: {
    padding: 5,
    margin: 5,
    borderRadius: theme.borders.radius,
    borderWidth: 0, 
    backgroundColor: theme.colors.mainBackground,
    fontSize: theme.fontSizes.tab
  },
  searchBar: {
    margin: 10,
  }
});

const SortingSelector = ({ sorting, setSorting, searchQuery, onChangeSearch }) => {

  return (
    <View style={styles.container}>
      <Searchbar style={styles.searchBar}
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <Picker
        style={styles.picker}
        selectedValue={sorting}
        onValueChange={(itemValue) =>
          setSorting(itemValue)
        }>
        <Picker.Item label="Latest repositories" value="Latest repositories" />
        <Picker.Item label="Highest rated repositories" value="Highest rated repositories" />
        <Picker.Item label="Lowest rated repositories" value="Lowest rated repositories" />
      </Picker>
    </View>
  );

};

export default SortingSelector;