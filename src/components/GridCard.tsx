import React, { useState } from "react";
import moon from "../assets/moon-regular.svg";
import details from "../assets/info_white_24dp.svg";

interface Props {}

const GridCard = (props: Props) => {
  const [mainTransitionClass, setMainTransitionClass] = useState("");
  const [secondaryTransitionClass, setSecondaryTransitionClass] = useState("");
  const [visibleClass, setVisibleClass] = useState("invisible");

  const forward = () => {
    setMainTransitionClass(" transform -translate-x-1/2 transition-transform ");
    setSecondaryTransitionClass(
      " transform translate-x-1/2 transition-transform "
    );
    setVisibleClass("visible");
    console.log(mainTransitionClass);
  };
  const backward = () => {};
  return (
    <div className="grid grid-cols-2 w-1/2 h-3/4 mx-auto  ml-32">
      <div
        className={`col-start-2 col-end-3 row-start-1 row-end-2 grid grid-rows-12 text-white  
          bg-green-500 p-2 h-full  ${mainTransitionClass}`}
      >
        <div className=" row-span-1 flex justify-end  ">
          <div className="cursor-pointer   " onClick={forward}>
            <img src={details}></img>
          </div>
        </div>
        <div className=" text-center row-span-2 flex flex-col my-auto ">
          {/* <div className="flex flex-col"> */}
          <div className="text-4xl">Cairo,Egypt</div>
        </div>
        <div className="text-center  row-span-6 flex flex-col my-auto">
          <div className="w-1/4 h-1/4 self-center  ">
            <img src={moon}></img>
          </div>

          <div className=" font-bold text-5xl">
            23<sup className="text-base align-top">o</sup>
          </div>
          <div className="text-l">Lorem, ipsum dolor.</div>
          {/* </div> */}
        </div>
        <div className="row-span-3 text-left w-5/6 mx-auto ">
          <div className="flex border-b-2  justify-between ">
            <div className=" border-white ">Reel Feel </div>
            <div>Degree</div>
          </div>

          <div className="flex border-b-2 justify-between">
            <div className=" border-white">Shade </div>
            <div>Degree</div>
          </div>
          <div className="flex border-b-2 justify-between">
            <div className=" border-white">Other </div>
            <div>Degree</div>
          </div>
        </div>
      </div>
      <div
        className={`bg-purple-400  col-start-2 col-end-3 row-start-1 row-end-2 ${visibleClass} grid grid-rows-8 p-2 items-center 
        text-white text-sm  ${secondaryTransitionClass} `}
      >
        <div className=" text-center">Full Details</div>
        <div className="flex border-b border-white border-dashed p-1 justify-between">
          <div className=" ">Humidity</div>
          <div>Value1</div>
        </div>
        <div className="flex border-b border-white  border-dashed p-1 justify-between">
          <div className=" ">Relative Humidity</div>
          <div>Value2</div>
        </div>
        <div className="flex border-b border-white  border-dashed p-1 justify-between">
          <div className=" ">Wind Speed</div>
          <div>Value3</div>
        </div>
        <div className="flex border-b border-white  border-dashed p-1 justify-between">
          <div className=" ">UVIndex</div>
          <div>Value4</div>
        </div>
        <div className="flex border-b border-white  border-dashed p-1 justify-between">
          <div className=" ">Pressure</div>
          <div>Value5</div>
        </div>
        <div className="flex border-b border-white  border-dashed p-1 justify-between">
          <div className=" ">Pressure</div>
          <div>Value5</div>
        </div>{" "}
        <div className="flex border-b border-white border-dashed p-1 justify-between">
          <div className=" ">Pressure</div>
          <div>Value5</div>
        </div>
      </div>
    </div>
  );
};

export default GridCard;
