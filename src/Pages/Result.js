import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ResultContainer from "../components/ResultContainer";

const Result = () => {
  const [result, setResult] = useState(""); //get weather result from user selected country
  const [loading, setLoading] = useState(true); //check if weather API call is completed

  let { city } = useParams();

  //call for selected country API
  const getData = async (city) => {
    try {
      const res = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=aa0ba9a997824d67ae1111340211711&q=${city}`
      );
      setResult(res.data);
      setLoading(false);
    } catch (error) {}
  };

  //only call waether API once
  useEffect(() => {
    getData(city);
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="loading">
          <h1>loading...</h1>
        </div>
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
    </div>
  );
};

export default Result;
