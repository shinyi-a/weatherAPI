import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResultContainer from "../components/ResultContainer";

const Result = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  let { city } = useParams();
  //   const [data, setData] = useState([]);
  useEffect(() => {
    // console.log("Hello");
    getData();
    // console.log("Data is done");
  }, []);
  // console.log(params);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=aa0ba9a997824d67ae1111340211711&q=${city}`
      );
      // console.log("Resposnse is sent");
      // console.log(res.data);
      setResult(res.data);
      setLoading(false);
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <ResultContainer
            country={result.location.country}
            temp={result.current.temp_c}
            cloud={result.current.cloud}
            uv={result.current.uv}
            humidity={result.current.humidity}
            text={result.current.condition.text}
            icon={result.current.condition.icon}
          />
        </>
      )}

      {/* <h1>{data.location.country}</h1> */}
    </div>
  );
};

export default Result;
