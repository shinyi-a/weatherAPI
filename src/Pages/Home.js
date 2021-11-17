import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  return (
    <div className="container">
      <div className="home">
        <h1>Please enter city name for weather</h1>

        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <br />
        <Link to={`/${inputText}`}>
          <button className="search">search</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
