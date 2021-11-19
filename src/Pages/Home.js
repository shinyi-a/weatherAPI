import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [country, setCountry] = useState([]); //get all countries API
  const [loadCountry, setLoadCountry] = useState(true); //check if API call is completed
  const [inputText, setInputText] = useState(""); //set user selected country

  //call for list of countries API
  const getCountry = async () => {
    try {
      const res = await axios.get("https://travelbriefing.org/countries.json");
      setCountry(res.data);
      setLoadCountry(false);
    } catch (error) {
      console.error(error);
    }
  };

  //only call countries API once
  useEffect(() => {
    getCountry();
  }, []);

  //set user selected country on change
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="container">
      <div className="home">
        <h1 className="cursornone">Select for current weather</h1>
        <br />
        {loadCountry ? (
          <h2>loading...</h2>
        ) : (
          <select className="dropdown" onChange={handleChange}>
            <option value="0">Please select country</option>
            {country.map((value, index) => {
              return (
                <option key={index} value={value.name}>
                  {value.name}
                </option>
              );
            })}
          </select>
        )}
        <br />
        <Link to={`/${inputText}`}>
          <button className="search">search</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
