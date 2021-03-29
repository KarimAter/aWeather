import React, { useState } from "react";
import moon from "../assets/moon-regular.svg";
import details from "../assets/info_white_24dp.svg";

interface Props {}

const GridCard = (props: Props) => {
  const [transitionClass, setTransitionClass] = useState("");
  const [visibleClass, setVisibleClass] = useState("invisible");

  const forward = () => {
    setTransitionClass("transform -translate-x-full transition-transform ");
    setVisibleClass("visible");
    console.log(transitionClass);
  };
  const backward = () => {};
  return (
    <div className="grid grid-cols-2 w-1/2 h-3/4 mx-auto bg-pink-300">
      <div
        className={`col-start-2 col-end-3 row-start-1 row-end-2 grid grid-rows-12 text-white  bg-green-500 p-2  ${transitionClass}`}
      >
        <div className=" row-span-1 flex justify-between ">
          <div>Cairo,Egypt</div>
          <div
            className="cursor-pointer active:bg-yellow-600  "
            onClick={forward}
          >
            <img src={details}></img>
          </div>
        </div>
        <div className=" row-span-8 my-auto">
          <div className="text-center flex flex-col  space-y-2 ">
            <div className="w-1/4 h-1/4 self-center ">
              <img src={moon}></img>
            </div>

            <div className=" font-bold text-5xl">
              23<sup className="text-base align-top">o</sup>
            </div>
            <div className="text-xl">Lorem, ipsum dolor.</div>
          </div>
        </div>
        <div className="row-span-3 self-center text-left flex-border w-5/6 mx-auto">
          <div className="flex border-b-2 justify-between">
            <div className=" border-white">Reel Feel Temprature</div>
            <div>Degree</div>
          </div>

          <div className="flex border-b-2 justify-between">
            <div className=" border-white">Shade Temprature</div>
            <div>Degree</div>
          </div>
          <div className="flex border-b-2 justify-between">
            <div className=" border-white">Other Temprature</div>
            <div>Degree</div>
          </div>
        </div>
      </div>
      <div
        className={`bg-purple-500 h-full col-start-2 col-end-3 row-start-1 row-end-2 ${visibleClass} grid grid-cols-2 grid-rows-5 p-2`}
      >
        <div className="col-span-2">1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </div>
  );
};

export default GridCard;
