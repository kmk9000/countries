import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search";
import Display from "./components/Display";
import axios from "axios";

function App() {
  // search bar
  const [search, setSearch] = useState("");

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  };

  // fetch data
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  // const filtered = countries.filter((country) =>
  //   country.name.common.toLowerCase().includes(search.toLowerCase())
  // );

  useEffect(() => {
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  return (
    <>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Display countries={filteredCountries} />
    </>
  );
}

export default App;
