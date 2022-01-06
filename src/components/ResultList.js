import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";
const ResultList = ({ title, results }) => {
  return (
    <View sytle={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {/* <Text>result: {results.length}</Text> */}
      </View>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 5,
  },
  text: {
    marginHorizontal: 10,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultList;
