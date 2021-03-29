import React from "react";
import moon from "../moon-regular.svg";

interface Props {}

const GridCard = (props: Props) => {
  return (
    <div className="grid grid-rows-12 h-3/4 w-1/4 my-auto mx-auto text-white  bg-green-500 p-4 ">
      <div className=" row-span-1 flex justify-between ">
        <div>Cairo,Egypt</div>
        <div>More</div>
      </div>
      <div className=" row-span-8 my-auto">
        <div className="text-center flex flex-col  space-y-2 ">
          <div className="w-1/4 h-1/4 self-center text-green-900 ">
            <img src={moon}></img>
          </div>

          <div className=" font-bold text-5xl">
            23<sup className="text-base align-top">o</sup>
          </div>
          <div className="text-xl">Lorem, ipsum dolor.</div>
        </div>
      </div>
      <div className="row-span-3 self-center">
        <div className="text-left flex flex-col w-3/4 mx-auto ">
          <div className="border-b-2 border-white">Reel Feel Temprature</div>
          <div className="border-b-2 border-white">Reel Feel Shade</div>
          <div>Reel Feel2</div>
        </div>
        {/* <div className="bg-gray-900">4</div>
      <div className="bg-green-800">5</div>
      <div className="bg-yellow-500">6</div> */}
      </div>
    </div>
  );
};

export default GridCard;
