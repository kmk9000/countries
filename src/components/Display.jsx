import React from "react";
const Display = ({ countries }) => {
  console.log(countries);
  return (
    <>
      <div>Loaded {countries.length} countries</div>
    </>
  );
};

export default Display;
