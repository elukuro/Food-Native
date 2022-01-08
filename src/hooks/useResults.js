import { useEffect, useState } from "react";
import yelp from "../api/yelp";

// section 10 103
/**
 * useEffect(()=>{}) meaning run arrow function every time component is rendered
 * useEffect(()=>{},[]) meaning run arrow function only when component first render
 * useEffect(()=>{},[value]) meaning run arrow function only when the component is first render, and when the 'value' changes
 * similar with mounted in vue
 */

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  // only call useEffect one time []
  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [errorMessage, searchAPI, results];
};
