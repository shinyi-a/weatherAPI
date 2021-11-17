import React from "react";

const ResultContainer = ({ country, temp, humidity }) => {
  return (
    <div>
      <h1>{country}</h1>
      <h1>{temp}</h1>
      <h1>{humidity}</h1>
    </div>
  );
};

export default ResultContainer;
