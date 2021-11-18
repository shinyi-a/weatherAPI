import React from "react";
import { Link } from "react-router-dom";

const ResultContainer = ({
  country,
  temp,
  cloud,
  uv,
  humidity,
  text,
  icon,
}) => {
  return (
    <div className="container">
      <div className="result">
        <img src={icon} alt={text} />
        <h1>{country}</h1>
        <h2>{text}</h2>
        <h2>{temp}</h2>
        <h2>{cloud}</h2>
        <h2>{uv}</h2>
        <h2>{humidity}</h2>
      </div>
      <Link to="/">
        <button className="gohome">go home</button>
      </Link>
    </div>
  );
};

export default ResultContainer;
