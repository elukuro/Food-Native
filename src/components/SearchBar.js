import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        // disabled capitalize on apple device
        autoCapitalize="none"
        // disabled autocorrect
        autoCorrect={false}
        // detect when user end input
        onEndEditing={onTermSubmit}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        // other way to do that use reference explain at section 8 no 98
        // onChangeText={onTermChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    fontSize: 34,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
