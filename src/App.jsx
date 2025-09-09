import { useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Display from "./components/Display";

function App() {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
  };

  return (
    <>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Display />
    </>
  );
}

export default App;
