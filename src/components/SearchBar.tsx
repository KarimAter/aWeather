import React, { useEffect, useState } from "react";
// import { getSuggestedCities } from "../apiCalls/apiCalls";
import axios, { AxiosError } from "axios";
import { API_KEY, GOOGLE_API_KEY, GOOGLE_API_STRING, ACCU } from "../Constants";

let google: string = `${GOOGLE_API_STRING}${GOOGLE_API_KEY}&input=`;
const accu: string = `${GOOGLE_API_STRING}${GOOGLE_API_KEY}&input=ca&origin=*`;

interface Props {
  getResult(result: string | null): void;
}

const SearchBar = ({ getResult }: Props) => {
  const [cityQuery, setCityQuery] = useState("");
  const [locations, setLocations] = useState<any[]>([]);
  let isSearResultsOpens: boolean = false;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityQuery(e.target.value);
  };

  useEffect(() => {
    axios
      // .get(`${ACCU}${API_KEY}&q=${cityQuery}&language=en-us`)
      .get(google + cityQuery)
      .then((response) => setLocations(response.data.predictions))
      // .then((response) => setLocations(response.data))
      .catch((error: AxiosError): void => {
        if (error.response) console.log(error.response);
        else if (error.request) console.log(error.request);
      });
  }, [cityQuery]);

  const handleCitySelect = (e: React.MouseEvent<HTMLLIElement>): void => {
    setCityQuery("");
    setLocations([]);
    getResult(e.currentTarget.textContent);
  };

  return (
    <div
      className="flex flex-col justify-center align-middle w-3/4 
      border-solid border-2 border-gray-500  mx-auto rounded-2xl
      "
    >
      <input
        id="citySearch"
        type="text"
        value={cityQuery}
        onChange={handleChange}
        autoComplete="off"
        className={`border-none outline-none w-full  hover:shadow-2xl hover:bg-gray-100 p-2 
         ${
           locations.length > 0 ? `rounded-b-none rounded-t-2xl` : `rounded-2xl`
         }`}
      ></input>
      {locations.length > 0 && (
        <ul className=" bg-white rounded-b-2xl border-t-1 p-2">
          {locations.map((location) => (
            <li
              className="cursor-pointer hover:bg-gray-200"
              key={location.Key}
              onClick={handleCitySelect}
            >
              {/* {`${location.LocalizedName}, ${location.AdministrativeArea.LocalizedName}, ${location.Country.ID}`} */}
              {`${location.description}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
