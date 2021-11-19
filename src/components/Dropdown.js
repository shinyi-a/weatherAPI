import React from "react";
import { useState } from "react";
import axios from "axios";

const Dropdown = () => {
  const [country, setCountry] = useState("");

  useEffect(() => {
    axios
      .get("https://travelbriefing.org/countries.json")
      .then((res) => setCountry(res.name))
      .catch((error) => console.log(error));
  }, []);

  return (
    <select className="form">
      <option value="0">Select Country</option>
      {country.map((count) => (
          <option key={} value={}>
            {count.name}
          </option>
      ))}
    </select>
  );
};

export default Dropdown;
