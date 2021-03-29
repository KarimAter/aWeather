import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import imagee from "../src/noaa-Y7GUOQ83OMg-unsplash.jpg";
import Forecast from "./components/Forecast";
import GridCard from "./components/GridCard";

function App() {
  const [selectedCity, setSelectedCity] = useState("");
  const getResult = (result: string): void => {
    console.log(result);
    setSelectedCity(result);
  };
  return (
    <div className=" h-screen mt-36">
      {/* <div className="flex flex-col mx-auto w-full h-72  border-red-600 border-solid border-b-2">
        <img
          src={imagee}
          className=" mt-0  h-full object-cover translate-y-1/2"
        ></img>
        <div className="absolute z-50 mt-28 w-full">
          <SearchBar getResult={getResult}></SearchBar>
        </div>
      </div>
      <div className="bg-green-900">{selectedCity}</div>
      <Forecast city={selectedCity}></Forecast> */}

      <GridCard></GridCard>
    </div>
  );
}

export default App;
