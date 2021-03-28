import React from "react";
import SearchBar from "./components/SearchBar";
import imagee from "../src/noaa-Y7GUOQ83OMg-unsplash.jpg";

function App() {
  const getResult = (result: string): void => {
    console.log(result);
  };
  return (
    <div className="relative">
      <img src={imagee} className="absolute mt-0 "></img>
      <div className="absolute z-50 mt-48 w-full">
        <SearchBar getResult={getResult}></SearchBar>
      </div>
    </div>
  );
}

export default App;
