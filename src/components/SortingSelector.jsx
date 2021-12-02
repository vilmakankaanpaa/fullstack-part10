import React from "react";
import { StyleSheet, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
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
  }
});

const SortingSelector = ({ sorting, setSorting }) => {

  return (
    <View style={styles.container}>
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