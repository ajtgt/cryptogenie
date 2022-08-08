import React from "react";
import TrendPredictionHeader from "../components/TrendPredictionHeader";
import TrendPredictionCards from "../components/TrendPredictionCards";
import TrendPredictionCentGraph from "../components/TrendPredictionCentGraph";

const CoinInfoBlock = () => {
  return (
    <div>
      <div className="container bg-light p-4 ">
        <TrendPredictionHeader />
        <TrendPredictionCentGraph />
        {/* Desktop View */}
        <div className="container">
          <div className="row d-none d-lg-block d-lg-flex flex-lg-row ">
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
          </div>
          {/* Mobile View */}
          <div className="row d-flex d-sm-flex flex-row flex-nowrap flex-sm-row flex-sm-nowrap overflow-auto d-sm-block d-lg-none">
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
            <div className="col-lg-2">
              <TrendPredictionCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfoBlock;
