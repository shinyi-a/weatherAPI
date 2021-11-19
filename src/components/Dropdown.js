import React, { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      setCountry(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <select className="form">
      {/* <option value="0">Select Country</option> */}
      {country.map((count, index) => {
        return (
          <option key={index} value={count.name.common}>
            {count.name.common}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
