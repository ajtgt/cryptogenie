import React from "react";
import TrendUp from "../assets/TrendPediction/TrendUp.svg";
import Correct from "../assets/TrendPediction/Correct.svg";

const TrendPredictionCards = () => {
  return (
    <>
      <div className="d-lg-flex  mb-4 justify-content-around d-none d-lg-block  "></div>
      <div className="w-100 border bg-white p-3 ">
        <div className="d-flex justify-content-center align-items-center">
          <small>06:00AM-06:30AM</small>
        </div>
        <hr className="mb-4" />
        <div className="d-flex justify-content-center align-items-center mb-2">
          <img src={TrendUp} />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-2">
          <b>Up</b>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          36591.63 USDT
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-light">
            <img src={Correct} />
          </button>
        </div>
      </div>
    </>
  );
};

export default TrendPredictionCards;
