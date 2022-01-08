import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [errorMessage, searchAPI, results] = useResults();
  // section 10 104 move to hooks/useResults

  // const [results, setResults] = useState([]);
  // const [errorMessage, setErrorMessage] = useState("");

  // const searchAPI = async (searchTerm) => {
  //   console.log("just first time");
  //   try {
  //     const response = await yelp.get("/search", {
  //       params: {
  //         limit: 50,
  //         term: searchTerm,
  //         location: "san jose",
  //       },
  //     });
  //     setResults(response.data.businesses);
  //     setErrorMessage("");
  //   } catch (err) {
  //     setErrorMessage("Something went wrong");
  //   }
  // };

  // section 10 103
  /**
   * useEffect(()=>{}) meaning run arrow function every time component is rendered
   * useEffect(()=>{},[]) meaning run arrow function only when component first render
   * useEffect(()=>{},[value]) meaning run arrow function only when the component is first render, and when the 'value' changes
   * similar with mounted in vue
   */

  // section 10 104 move to hooks/useResults

  // useEffect(() => {
  //   searchAPI("pasta");
  // }, []);

  // caled searchAPI imediately after screenr rendered are BAD CODE

  // section 10 108
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    // section 11 113 make it height fill screen
    <>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
        onTermSubmit={() => {
          searchAPI(term);
        }}
        // simplify by
        // onTermSubmit={searchAPI}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultList
          title="Cost effective"
          results={filterResultsByPrice("$")}
        />
        <ResultList title="Bit Pricer" results={filterResultsByPrice("$$")} />
        <ResultList title="Big Spender" results={filterResultsByPrice("$$$")} />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
