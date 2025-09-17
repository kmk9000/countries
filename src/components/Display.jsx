import React from "react";
const Display = ({ countries, selectedCountry, setSelectedCountry }) => {
  console.log(countries);
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

const CountryDetails = ({ country }) => {
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
    </>
  );
};

export default Display;
