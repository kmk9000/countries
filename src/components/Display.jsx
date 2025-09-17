import React from "react";
import CountryDetails from "./CountryDetails";
const Display = ({ countries, selectedCountry, setSelectedCountry }) => {
  if (countries.length > 10) {
    return <>Too many matches ({countries.length})</>;
  }
  if (selectedCountry) {
    return <CountryDetails country={selectedCountry} />;
  }

  if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            {country.name.common}{" "}
            <button onClick={() => setSelectedCountry(country)}>Show</button>
          </li>
        ))}
      </ul>
    );
  }

  if (countries.length === 1) {
    return <CountryDetails country={countries[0]} />;
  }
  return null;
};

export default Display;
