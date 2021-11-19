import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1>
        <Link to="/">
          <h3>Current Weather App</h3>
        </Link>
      </h1>
    </div>
  );
};

export default Nav;
