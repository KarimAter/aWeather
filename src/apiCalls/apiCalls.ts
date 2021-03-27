import axios from "axios";
import { API_KEY } from "../Constants";

// export const getSuggestedCities = (query: string): string[] => {
//   let citiesArray: any[] = [];
//   let cities: string[] = [];
//   console.log(query);
//   const data: string[] = await axios
//     .get(
//       `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}&language=en-us`
//     )
//     .then((respone) => respone.data);

//   return data;

//   // .then((response) => {
//   //       citiesArray = response.data;
//   // })
//   // .catch((error) => {
//   //   console.log(error);
//   // });

//   //   cities = citiesArray.map((a) => a.LocalizedName as string);
//   //   console.log(cities);
//   //   return cities;

//   //   await return citiesArray;
// };
