import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TrendCards from "../../components/TrendCards";

// import Btccoin from "../../assets/Btccoin.svg";
// import Tcoin from "../../assets/Tcoin.svg";
// import SandClock from "../../assets/SandClock.svg";
// import ArrowBtn from "../../assets/ArrowBtn.svg";
// import ProgressLine from "../../assets/ProgressLine.svg";
// import CircleRatio from "../../assets/CircleRatio.svg";
// import Circle from "../../assets/Circle.svg";
// import Ranging from "../../assets/Ranging.svg";
// import Minus from "../../assets/Minus.svg";
import Disclaimer from "../../assets/Disclaimer.svg";

const TrendPrediction = () => {
  return (
    <>
      <Header />
      <div className="container-fluid g-0 ">
        {/* Header */}
        <div className="d-flex justify-content-between py-4 px-5  ">
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

        {/* Trend Prediction Full container */}
        <TrendCards />
        <TrendCards />
        <TrendCards />
        <TrendCards />
        <TrendCards />
        <TrendCards />
        <div className="mx-5">
          <img className="w-100" src={Disclaimer}></img>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrendPrediction;
