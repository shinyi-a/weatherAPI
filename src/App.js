import "./index.css";
import { Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer"
// import WeatherData from './components/WeatherData';
import Home from "./Pages/Home";
import Result from "./Pages/Result";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":city" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
