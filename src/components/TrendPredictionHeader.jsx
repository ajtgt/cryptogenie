import React from "react";
import Bitcoin from "../assets/TrendPediction/Bitcoin.svg";
import Tether from "../assets/TrendPediction/Tether.svg";
import TetherBatch from "../assets/TrendPediction/TetherBatch.svg";
import Timer from "../assets/TrendPediction/Timer.svg";
import NextButton from "../assets/TrendPediction/NextButton.svg";

const TrendPredictionHeader = () => {
  return (
    <div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-sm-12 col-12 col-lg-4 d-sm-flex justify-content-sm-center d-flex justify-content-center d-lg-flex justify-content-lg-center">
            <div className="border-end pe-5">
              <img src={Bitcoin} className="img-fluid" />
            </div>

            <div className="ps-5">
              <img src={Tether} className="img-fluid" />
            </div>
          </div>
          <div className=" col-lg-8 d-none d-lg-block">
            <div className="d-lg-flex flex-lg-row justify-content-lg-between">
              <div className="">
                <img src={TetherBatch} className="img-fluid" />
              </div>
              <div className="d-lg-flex flex-lg-row ">
                <div className="me-3  d-lg-flex justify-content-lg-center  align-items-lg-center d-none d-lg-block">
                  <img src={Timer} />
                </div>
                <div className="me-3 d-lg-flex justify-content-lg-center  align-items-lg-center d-none d-lg-block">
                  Next Prediction
                </div>
                <div className="me-3 d-lg-flex justify-content-lg-center  align-items-lg-center d-none d-lg-block">
                  12:12
                </div>
                <div className="me-4 d-lg-flex justify-content-lg-center  align-items-lg-center">
                  <div type="button">
                    <img src={NextButton} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile View */}
          <div className=" col-lg-8 d-lg-none">
            <div className="d-sm-flex flex-sm-row justify-content-sm-between d-flex flex-row justify-content-between">
              <div className="">
                <img src={TetherBatch} className="img-fluid" />
              </div>
              <div className="d-lg-flex flex-lg-row ">
                <div className="me-4 d-lg-flex justify-content-lg-center  align-items-lg-center">
                  <div type="button">
                    <img src={NextButton} className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendPredictionHeader;
