import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { data } from "../APIdata";
import DetailCard from "./DetailCard";

interface Props {
  city: string;
}

export interface IForecast {
  //   city: string;
  text: string;
  sunRise: string;
  sunSet: string;
  minimumValue: string;
  maximumValue: string;
}

const fetchNeededForecastData = (data: any): IForecast => {
  return {
    text: data.Headline.Text,
    sunRise: data.DailyForecasts[0].Sun.Rise,
    sunSet: data.DailyForecasts[0].Sun.Set,
    minimumValue: data.DailyForecasts[0].Temperature.Minimum.Value,
    maximumValue: data.DailyForecasts[0].Temperature.Maximum.Value,
  };
};

const Forecast = ({ city }: Props) => {
  const [forecast, setForecast] = useState<IForecast>({
    text: "",
    sunRise: "",
    sunSet: "",
    minimumValue: "",
    maximumValue: "",
  });

  useEffect(() => {
    setForecast(fetchNeededForecastData(data));
  }, [city]);

  //   useEffect(() => {
  //     axios
  //       .get(
  //         "http://dataservice.accuweather.com/forecasts/v1/daily/1day/127164?apikey=LAEGXMN33PHHEA4wAfAtiDmmFwjoSQPQ&language=en-us&details=true&metric=true"
  //       )
  //       .then((response) => {
  //         setForecast({ text: response.data.Headline.Text });
  //       })
  //       .catch();
  //   }, [city]);

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 overflow-x-auto">
        {/* <Card label={"General Text"} value={forecast.text}></Card>
        <Card label={"Sun Rise"} value={forecast.sunRise}></Card>
        <Card label={"Sun Set"} value={forecast.sunSet}></Card>
        <Card label={"Minimum Temprature"} value={forecast.minimumValue}></Card>
        <Card label={"Maximum Temprature"} value={forecast.maximumValue}></Card> */}

        <DetailCard></DetailCard>
      </dl>
    </div>
  );
};

export default Forecast;
