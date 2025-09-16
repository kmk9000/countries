import React from "react";
const Display = ({ countries }) => {
  console.log(countries);
  if (countries.length > 10) {
    return <>Too many matches ({countries.length})</>;
  }
  if (countries.length <= 10 && countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name.common}</li>
        ))}
      </ul>
    );
  }
  if (countries.length === 1) {
    const country = countries[0];

    return (
      <>
        <img src={country.flags.svg} style={{ width: "150px" }} />
        <h2>{country.name.common}</h2>
        <h3>Languages</h3>
        <ul>
          {Object.keys(country.languages).map((key) => (
            <li key={key}>{country.languages[key]}</li>
          ))}
        </ul>
      </>
    );
  }
};

export default Display;
