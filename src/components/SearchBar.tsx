import React, { useEffect, useState } from "react";
// import { getSuggestedCities } from "../apiCalls/apiCalls";
import axios from "axios";
import { API_KEY } from "../Constants";

interface Props {
  getResult(result: string | null): void;
}

const SearchBar = ({ getResult }: Props) => {
  const [cityQuery, setCityQuery] = useState("");
  const [locations, setLocations] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCityQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${cityQuery}&language=en-us`
      )
      .then((response) => setLocations(response.data));
  }, [cityQuery]);

  const handleCitySelect = (e: React.MouseEvent<HTMLLIElement>): void => {
    setCityQuery("");
    setLocations([]);
    getResult(e.currentTarget.textContent);
  };

  return (
    <div
      className="flex flex-col justify-center w-1/4
    border-solid border-2 border-gray-500
    shadow"
    >
      <input
        id="citySearch"
        type="text"
        value={cityQuery}
        onChange={handleChange}
        autoComplete="off"
        className="border-none outline-none "
      ></input>
      {locations && (
        <ul className="border-t-2">
          {locations.map((location) => (
            <li
              className="cursor-pointer hover:bg-gray-200"
              key={location.Key}
              onClick={handleCitySelect}
            >{`${location.LocalizedName}, ${location.AdministrativeArea.LocalizedName}, ${location.Country.ID}`}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
