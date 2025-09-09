import { useState } from "react";
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

  return (
    <>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Display />
    </>
  );
}

export default App;
