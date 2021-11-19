// import React from "react";
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   const [inputText, setInputText] = useState("");

//   const handleChange = (e) => {
//     setInputText(e.target.value);
//     // console.log(inputText);
//   };

//   return (
//     <div className="container">
//       <div className="home">
//         <h1>Please enter city name for current weather</h1>
//         <input
//           type="text"
//           onChange={handleChange}
//           placeholder="Enter city name"
//         />
//         <br />
//         <Link to={`/${inputText}`}>
//           <button className="search">search</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [country, setCountry] = useState([]);
  const [loadCountry, setLoadCountry] = useState(true);
  const [inputText, setInputText] = useState("");

  // const handleClick = (count) => {
  //   setInputText(count);
  //   console.log(count);
  //   console.log(inputText);
  // };

  const handleChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);
  };

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
    <div className="container">
      <div className="home">
        <h1>Please enter city name for current weather</h1>
        {/* <input
          type="text"
          onChange={handleChange}
          placeholder="Enter city name"
        /> */}
        {loadCountry ? (
          <h1>loading</h1>
        ) : (
          <select className="form" onChange={handleChange}>
            <option value="0">Please select country</option>
            {country.map((value, index) => {
              return (
                <option
                  key={index}
                  value={value.name}
                  // onClick={() => handleClick(value.name)}
                >
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
