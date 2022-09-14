import React from "react";
import Last30Days from "../assets/TrendPediction/Last30Days.svg";
import Accuracy from "../assets/TrendPediction/Accuracy.svg";
import Progress from "../assets/TrendPediction/Progress.svg";
import CirclewithPlus from "../assets/TrendPediction/CirclewithPlus.svg";

import { useSelector } from "react-redux";

import { Pie, PieChart } from "recharts";

const TrendPredictionCentGraph = () => {
  // const preddata = useSelector((state) => state.pred.pred);
  // const preddata = useSelector((state) => state.pred.pred.data.data);
  // const pred = useSelector((state) => state.pred.data.data.payload);
  // console.log("PerCent Page Data : ", preddata.data?.data.payload);

  return (
    <div>
      <div className="d-lg-flex  mb-4 justify-content-around d-none d-lg-block  ">
        <div className="d-flex">
          <img src={Last30Days} className="img-fluid" />
        </div>
        <div className="">
          <img src={Progress} className="img-fluid" />
        </div>
        <div className="d-flex">
          <div className="d-flex ">
            <div className="d-flex flex-column">
              <div>{/* {preddata.data?.data?.payload?.[0].asset} */}</div>
              <div>2</div>
            </div>
            <div className="">Pie</div>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div class="container d-sm-block d-lg-none">
        <div class="row d-flex d-sm-flex flex-row flex-nowrap flex-sm-row flex-sm-nowrap overflow-auto g-3 mb-3">
          <div class="col-6 col-sm-3 col-lg-1">
            <div class="card card-body bg-light border-0 ">
              <img src={Last30Days} classname="img-fluid " />
            </div>
          </div>
          <div class="col-12 col-sm-6 col-lg-2">
            <div class="card card-body bg-light border-0  ">
              <img src={Progress} classname="img-responsive " />
            </div>
          </div>
          <div class="col-10 col-sm-5 col-lg-2">
            <div class="card card-body bg-light border-0  ">
              <img src={Accuracy} classname="img-responsive" />
            </div>
          </div>
          <div class="col-10 col-sm-5 col-lg-2">
            <div class="card card-body bg-light border-0">
              <img src={Accuracy} classname="img-responsive" />
            </div>
          </div>
          <div class="col-10 col-sm-5 col-lg-2">
            <div class="card card-body bg-light border-0  ">
              <img src={Accuracy} classname="img-responsive " />
            </div>
          </div>
          <div class="col-10 col-sm-5 col-lg-2">
            <div class="card card-body bg-light border-0  ">
              <img src={Accuracy} classname="img-responsive " />
            </div>
          </div>
          <div class="col-10 col-sm-5 col-lg-2">
            <div class="card card-body bg-light border-0  ">
              <img src={Accuracy} classname="img-responsive " />
            </div>
          </div>
          <div class="col-6 col-sm-3 col-lg-1">
            <div class="card card-body bg-light border-0 ">
              <img src={CirclewithPlus} classname="img-responsive " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendPredictionCentGraph;
