import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Btccoin from "../../assets/Btccoin.svg";
import Tcoin from "../../assets/Tcoin.svg";
import SandClock from "../../assets/SandClock.svg";
import ArrowBtn from "../../assets/ArrowBtn.svg";
import Info from "../../assets/Info.svg";
import Calender from "../../assets/Calender.svg";
import LineChart from "../../assets/LineChart.svg";
import LineChart1 from "../../assets/LineChart1.svg";
import PrecisionMetrics1 from "../../assets/PrecisionMetrics1.svg";
import PrecisionMetrics2 from "../../assets/PrecisionMetrics2.svg";

// import ProgressLine from "../assets/ProgressLine.svg";
// import CircleRatio from "../assets/CircleRatio.svg";
// import Circle from "../assets/Circle.svg";
// import Ranging from "../assets/Ranging.svg";
// import Minus from "../assets/Minus.svg";

const ProfilePage = () => {
  return (
    <div>
      <Header />

      <div className="container-fluid g-0 px-5">
        {/* First Row */}
        {/* Header */}
        <div className="d-flex justify-content-between py-4  ">
          <div>
            <h1>Trend Predictions</h1>
          </div>
          {/* Dropdown */}
          <div class="dropdown d-flex  align-items-center">
            <div
              type="button"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Sort by:<b>Tether</b>
            </div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Link 1
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Link 2
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Link 3
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row  */}
        <div className="d-flex flex-row justify-content-between align-items-center mb-4 ">
          {/* Left Container */}
          <div className="d-flex justify-content-start align-items-center ">
            {/* First Coin */}
            <div className="firstcoin border-end d-flex flex-row">
              <div>
                <img className="w-40 h-40 me-3" src={Btccoin} />
              </div>
              <div className="me-4">
                <h3>Bitcoin</h3>
              </div>
            </div>
            {/* Second Coin */}
            <div className="secondcoin d-flex flex-row">
              <div className="ms-4 me-4">
                <img className="w-40 h-40" src={Tcoin} />
              </div>
              <div>
                <h3>Tether</h3>
              </div>
            </div>
            <div className="ticker bg-white ms-4">BTCUSDT</div>
          </div>
          {/* Right Container */}
          <div className="d-flex flex-row justify-content-center align-items-center ">
            <div className="sandclock w-12 w-24 me-3">
              <img src={SandClock}></img>
            </div>
            <div className="me-3">Next Prediction</div>
            <div className="text-purple me-4">14:48</div>
            <div className="ms-3">
              <img src={ArrowBtn} />
            </div>
          </div>
        </div>

        {/* Third Row */}
        <div className="d-flex mb-4  h-136 d-flex justify-content-between ">
          {/* Right Side */}
          <div className="leftside px-5 py-4 bg-light">
            <div className="d-flex ">
              <div>
                <h9>Fully Diluted Market Cap</h9>
              </div>
              <div className="w-24 h-24">
                <img src={Info}></img>
              </div>
            </div>
            <div>$768,275,580,230</div>
            <div className="bg-success w-auto rounded">0.46%</div>
          </div>
          <div className="rightside d-flex flex-row px-5 py-4 bg-light">
            <div className="border-end pe-4 ">
              <div className="d-flex  ">
                <div>
                  <h9>Market Cap</h9>
                </div>
                <div className="w-24 h-24">
                  <img src={Info}></img>
                </div>
              </div>
              <div>$692,987,536,716</div>
              <div className="bg-success w-auto rounded">0.46%</div>
            </div>
            {/* Right Side */}
            <div className="border-end pe-4 ps-4">
              <div className="d-flex  ">
                <div>
                  <h9>Fully Diluted Market Cap</h9>
                </div>
                <div className="w-24 h-24">
                  <img src={Info}></img>
                </div>
              </div>
              <div>$768,275,580,230</div>
              <div className="bg-success w-auto rounded">0.46%</div>
            </div>
            <div className="border-end pe-4 ps-4">
              <div className="d-flex  ">
                <div>
                  <h9>Volume</h9>
                </div>
                <div className="w-24 h-24">
                  <img src={Info}></img>
                </div>
              </div>
              <div>$20,368,398,036</div>
              <div className="bg-success w-auto rounded">0.46%</div>
            </div>
            <div className=" ps-4 ">
              <div className="d-flex  ">
                <div>
                  <h9>Circulating Supply</h9>
                </div>
                <div className="w-24 h-24">
                  <img src={Info}></img>
                </div>
              </div>
              <div>$692,987,536,716</div>
              <div className=" w-auto rounded">90% of total supply</div>
            </div>
          </div>
        </div>

        {/* Forth Row F1 Score Metrics*/}
        <div className="d-flex flex-row justify-content-between bg-light">
          {/* First Column */}
          <div className="p-4 w-664 ">
            {/* First Row */}
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
              {/* Left Side */}
              <div className="h3">F1 Score Metrics</div>
              {/* Right Side */}
              <div className="bg-white d-flex p-1">
                <div className="pe-1 border-end">1D</div>
                <div className="pe-1 ps-1 border-end">7D</div>
                <div className="pe-1 ps-1 border-end">1M</div>
                <div className="pe-1 ps-1 border-end">3M</div>
                <div className="pe-1 ps-1 border-end">1Y</div>
                <div className="pe-1 ps-1 border-end">ALL</div>
                <div className="w-24 h-24 ps-1">
                  <img src={Calender}></img>
                </div>
              </div>
            </div>
            {/* Second  Row */}
            <div className="mb-3">
              <img className="w-100" src={LineChart}></img>
            </div>
            {/* Third  Row */}
            <div className="mb-3">
              <img className="w-100" src={LineChart1}></img>
            </div>
            {/* Forth Row */}
            <div className="d-flex justify-content-around align-items-center ">
              <div className="border-end pe-3">
                <div>Current Prediction Timeline</div>
                <div>
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="border-end pe-3 ps-3 ">
                <div>Reference Price</div>
                <div>
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="pe-3">
                <div>$44,367.16</div>
                <div>
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
          {/* Second Column */}
          <div className="p-4 w-664 ">
            {/* First Row */}
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
              {/* Left Side */}
              <div className="h3">F1 Score Metrics</div>
              {/* Right Side */}
              <div className="bg-white d-flex p-1">
                <div className="pe-1 border-end">1D</div>
                <div className="pe-1 ps-1 border-end">7D</div>
                <div className="pe-1 ps-1 border-end">1M</div>
                <div className="pe-1 ps-1 border-end">3M</div>
                <div className="pe-1 ps-1 border-end">1Y</div>
                <div className="pe-1 ps-1 border-end">ALL</div>
                <div className="w-24 h-24 ps-1">
                  <img src={Calender}></img>
                </div>
              </div>
            </div>
            {/* Second  Row */}
            <div className="mb-3">
              <img className="w-100" src={LineChart}></img>
            </div>
            {/* Third  Row */}
            <div className="mb-3">
              <img className="w-100" src={LineChart1}></img>
            </div>
            {/* Forth Row */}
            <div className="d-flex justify-content-around align-items-center ">
              <div className="border-end pe-3">
                <div>Current Prediction Timeline</div>
                <div>
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="border-end pe-3 ps-3 ">
                <div>Reference Price</div>
                <div>
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="pe-3">
                <div>$44,367.16</div>
                <div>
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fifth Row Precision Metrics */}
        <div className="p-4 w-100 bg-light mt-4">
          {/* First Row */}
          <div className="d-flex flex-row justify-content-between align-items-center mb-4">
            {/* Left Side */}
            <div className="h3">Precision Metrics</div>
            {/* Right Side */}
            <div className="bg-white d-flex p-1">
              <div className="pe-1 border-end">1D</div>
              <div className="pe-1 ps-1 border-end">7D</div>
              <div className="pe-1 ps-1 border-end">1M</div>
              <div className="pe-1 ps-1 border-end">3M</div>
              <div className="pe-1 ps-1 border-end">1Y</div>
              <div className="pe-1 ps-1 border-end">ALL</div>
              <div className="w-24 h-24 ps-1">
                <img src={Calender}></img>
              </div>
            </div>
          </div>
          {/* Second  Row */}
          <div className="mb-3 w-100">
            <img className="w-100" src={PrecisionMetrics1}></img>
          </div>
          {/* Third  Row */}
          <div className="mb-3">
            <img className="w-100" src={PrecisionMetrics2}></img>
          </div>
          {/* Forth Row */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfilePage;
