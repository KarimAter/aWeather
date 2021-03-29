import React from "react";

interface Props {}

const DetailCard = (props: Props) => {
  return (
    <div className="w-80 h-96 flex flex-col bg-blue-500 p-2">
      <div className="w-full h-full  ">
        <div className="font-bold w-1/2 text-left  text-white">Cairo</div>
        <div className="more"></div>
      </div>
      <div className="weather">
        <ul className="p-4">
          <li>
            <div className="day">Sunday</div>
            <div className="temp">22</div>
          </li>
          <li>
            <div className="day">Monday</div>
            <div className="temp">23</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DetailCard;
