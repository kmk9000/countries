import React from "react";
import Weather from "./Weather";

const CountryDetails = ({ country }) => {
  const capital = country.capital?.[0];
  return (
    <>
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Area Code: {country.area}</p>
      <h3>Languages</h3>
      <ul>
        {Object.keys(country.languages).map((key) => (
          <li key={key}>{country.languages[key]}</li>
        ))}
      </ul>
      <img src={country.flags.svg} style={{ width: "150px" }} />
      <h3>Weather in {country.capital}</h3>
      <Weather capital={capital} />
    </>
  );
};

export default CountryDetails;
