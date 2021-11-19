// import React, { useState, useEffort } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function WeatherData() {
//   useEffect(() => {
//     getLang();
//   }, []);

//   const getLang = async () => {
//     try {
//       const res = await axios.get(
//         `https://api.weatherapi.com/v1/current.json?key=aa0ba9a997824d67ae1111340211711&q=${lang}`
//       );
//       console.log("Resposnse is sent");
//       console.log(res);
//       setResult(res.data);
//       setLoading(false);
//       console.log(result);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Link to=":city"></Link>
//     </>
//   );
// }
