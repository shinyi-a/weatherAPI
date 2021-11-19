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
        <br />
        <h2 className="nobold">temperature: {temp}°C</h2>
        <h2 className="nobold">cloud: {cloud}%</h2>
        <h2 className="nobold">uv index: {uv}</h2>
        <h2 className="nobold">humidity: {humidity}%</h2>
        <br />
      </div>
      <Link to="/">
        <button className="gohome">go home</button>
      </Link>
    </div>
  );
};

export default ResultContainer;
