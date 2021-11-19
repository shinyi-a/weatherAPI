import React, { useState, useEffect } from "react";
import axios from "axios";

const Dropdown = () => {
  const [country, setCountry] = useState([]);
  const [loadCountry, setLoadCountry] = useState(true);

  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = async () => {
    try {
      const res = await axios.get("https://travelbriefing.org/countries.json");
      setCountry(res.data);
      setLoadCountry(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {loadCountry ? (
        <h1>loading</h1>
      ) : (
        <select className="form">
          {country.map((value, index) => {
            return (
              <option key={index} value={value.name}>
                {value.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
};

export default Dropdown;
