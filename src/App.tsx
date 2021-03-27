import React from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const getResult = (result: string): void => {
    console.log(result);
  };
  return (
    <div>
      <SearchBar getResult={getResult}></SearchBar>
    </div>
  );
}

export default App;
