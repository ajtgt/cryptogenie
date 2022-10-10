import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import BackArrow from "../../assets/CryptoProfilePage/BackArrow.svg";
import BitcoinIcon from "../../assets/CryptoProfilePage/BitcoinIcon.svg";
import TetherIcon from "../../assets/CryptoProfilePage/TetherIcon.svg";
import Ticker from "../../assets/CryptoProfilePage/Ticker.svg";
import ButtonIcon from "../../assets/CryptoProfilePage/ButtonIcon.svg";
import UpTick from "../../assets/CryptoProfilePage/UpTick.svg";
import iIcon from "../../assets/CryptoProfilePage/iIcon.svg";
import Calender from "../../assets/CryptoProfilePage/Calender.svg";
import GreenTick from "../../assets/CryptoProfilePage/GreenTick.svg";
import RedCross from "../../assets/CryptoProfilePage/RedCross.svg";
import YellowNeutral from "../../assets/CryptoProfilePage/YellowNeutral.svg";
import GraphF1MetricsScore from "../../assets/CryptoProfilePage/GraphF1MetricsScore.svg";
import LineGraph from "../../assets/CryptoProfilePage/LineGraph.svg";
import Disclaimer from "../../components/Disclaimer";

const CryptoProfilePage = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex my-4 ">
        <div className="d-flex justify-content-center align-items-center pe-3">
          <div type="button" class="btn ">
            <a href="/trendprediction">
              <img src={BackArrow} />
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center ">
          <a className="text-decoration-none" href="/trendprediction">
            <h3 className="m-0 text-dark ">Trend Prediction</h3>
          </a>
        </div>
      </div>
      {/* Crypto Ticker Header */}
      <div className="container">
        <div className="row p-0 m-0 mb-3">
          <div className="col-lg-5 col-xs-12  col-sm-12 d-flex justify-content-start ">
            <div className="d-flex  border-end pe-5">
              <img src={BitcoinIcon} className="img-fluid pe-3" />
              <h2>Bitcoin</h2>
            </div>

            <div className="d-flex">
              <img src={TetherIcon} className="ps-5 img-fluid pe-3" />
              <h2>Tether</h2>
            </div>
          </div>
          <div className="col-lg-7 col-xs-12 col-sm-12 d-flex justify-content-between align-items-center">
            <div>
              <img src={Ticker} />
            </div>
            <div>
              <button type="button" class="btn btn-primary">
                <img src={ButtonIcon} className="me-3" />
                Go To Trade
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Ticker Header ^^^^^ */}

      {/* BitCoin */}

      <div className="container mb-4">
        <div className="d-sm-flex d-md-flex d-lg-flex flex-sm-column flex-md-column flex-lg-row bg-white ">
          <div className="p-3 bg-light">
            {/* BitCoin Price First Column */}
            <div className="mb-3">
              <b>Bitcoin Price</b> (BTC)
            </div>

            <div className="d-flex">
              <h2 className="pe-3">$36,584.55</h2>
              <div className="d-flex justify-content-center align-items-center">
                <div
                  type="button"
                  class="btn-success btn-sm d-flex justify-content-center align-items-center"
                >
                  <img src={UpTick} className="p-1"></img>
                  0.46%
                </div>
              </div>
            </div>
          </div>

          {/* BitCoin Cap First Column Column */}
          <div className="p-3 bg-light border-end  border-md-bottom">
            <div className="d-lg-flex d-md-flex d-sm-flex justify-content-start">
              <h6 className="me-3">Market Cap</h6>
              <img src={iIcon} width="24px" height="24px" />
            </div>
            <div className="h4">$692,987,536,716</div>
            <div className="d-flex justify-content-start align-items-center">
              <div
                type="button"
                class="btn-success btn-sm d-flex justify-content-center align-items-center"
              >
                <img src={UpTick} className="p-1"></img>
                0.46%
              </div>
            </div>
          </div>

          {/* BitCoin Second Column Column */}
          <div className="p-3 bg-light border-end  border-md-bottom">
            <div className="d-lg-flex d-md-flex d-sm-flex justify-content-start">
              <h6 className="me-3">Market Cap</h6>
              <img src={iIcon} width="24px" height="24px" />
            </div>
            <div className="h4">$692,987,536,716</div>
            <div className="d-flex justify-content-start align-items-center">
              <div
                type="button"
                class="btn-success btn-sm d-flex justify-content-center align-items-center"
              >
                <img src={UpTick} className="p-1"></img>
                0.46%
              </div>
            </div>
          </div>
          {/* BitCoin Cap Third Column Column */}
          <div className="p-3 bg-light border-end  border-md-bottom">
            <div className="d-lg-flex d-md-flex d-sm-flex justify-content-start">
              <h6 className="me-3">Market Cap</h6>
              <img src={iIcon} width="24px" height="24px" />
            </div>
            <div className="h4">$692,987,536,716</div>
            <div className="d-flex justify-content-start align-items-center">
              <div
                type="button"
                class="btn-success btn-sm d-flex justify-content-center align-items-center"
              >
                <img src={UpTick} className="p-1"></img>
                0.46%
              </div>
            </div>
          </div>
          {/* BitCoin Cap Fourth Column Column */}
          <div className="p-3 bg-light  ">
            <div className="d-lg-flex d-md-flex d-sm-flex justify-content-start">
              <h6 className="me-3">Market Cap</h6>
              <img src={iIcon} width="24px" height="24px" />
            </div>
            <div className="h4">$692,987,536,716</div>
            <div className="d-flex justify-content-start align-items-center">
              <div
                type="button"
                class="btn-success btn-sm d-flex justify-content-center align-items-center"
              >
                <img src={UpTick} className="p-1"></img>
                0.46%
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BitCoin  ^^^^*/}

      {/* Score And Accuracy Metrics */}
      <div className="container bg-white mb-4 ">
        <div className="d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-lg-row flex-md-column flex-sm-column ">
          <div className="col-lg-6 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column justify-lg-space-between bg-white mb-4 ">
                {/* Correct Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex flex-md-row flex-sm-row justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={GreenTick} width="20px" height="20px" />
                  </div>
                  <div className="">Correct Prediction</div>
                </div>
                {/* Incorrect Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={RedCross} width="20px" height="20px" />
                  </div>
                  <div className="">Incorrect Prediction</div>
                </div>

                {/* Not Confident Enough */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={YellowNeutral} width="20px" height="20px" />
                  </div>
                  <div className="">Not Confident Enough</div>
                </div>
                {/* Not Confident Enough ^^^^ */}
              </div>
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
            {/* Current Prediction Timeline */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column bg-light justify-content-lg-between ">
              <div className="">
                <div className="p  d-md-flex d-sm-flex  justify-content-md-center justify-content-sm-center">
                  Current Prediction Timeline
                </div>
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Reference Price
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Expected Next Move
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column justify-lg-space-between bg-white mb-4 ">
                {/* Correct Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex flex-md-row flex-sm-row justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={GreenTick} width="20px" height="20px" />
                  </div>
                  <div className="">Correct Prediction</div>
                </div>
                {/* Incorrect Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={RedCross} width="20px" height="20px" />
                  </div>
                  <div className="">Incorrect Prediction</div>
                </div>

                {/* Not Confident Enough */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={YellowNeutral} width="20px" height="20px" />
                  </div>
                  <div className="">Not Confident Enough</div>
                </div>
                {/* Not Confident Enough ^^^^ */}
              </div>
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
            {/* Current Prediction Timeline */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column bg-light justify-content-lg-between ">
              <div className="">
                <div className="p  d-md-flex d-sm-flex  justify-content-md-center justify-content-sm-center">
                  Current Prediction Timeline
                </div>
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Reference Price
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Expected Next Move
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Score And Accuracy Metrics^^^^^ */}

      {/* Prcision Metrics */}

      <div className="container bg-white mb-4 ">
        <div className="d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-lg-row flex-md-column flex-sm-column ">
          <div className="col-lg-12 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
          </div>
        </div>
      </div>

      {/* Precision Metrics ^^^^^ */}

      {/* Recall Metrics */}
      <div className="container bg-white mb-4 ">
        <div className="d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-lg-row flex-md-column flex-sm-column ">
          <div className="col-lg-6 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column justify-lg-space-between bg-white mb-4 ">
                {/* Correct Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex flex-md-row flex-sm-row justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={GreenTick} width="20px" height="20px" />
                  </div>
                  <div className="">Correct Prediction</div>
                </div>
                {/* Incorrect Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={RedCross} width="20px" height="20px" />
                  </div>
                  <div className="">Incorrect Prediction</div>
                </div>

                {/* Not Confident Enough */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={YellowNeutral} width="20px" height="20px" />
                  </div>
                  <div className="">Not Confident Enough</div>
                </div>
                {/* Not Confident Enough ^^^^ */}
              </div>
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
            {/* Current Prediction Timeline */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column bg-light justify-content-lg-between ">
              <div className="">
                <div className="p  d-md-flex d-sm-flex  justify-content-md-center justify-content-sm-center">
                  Current Prediction Timeline
                </div>
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Reference Price
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Expected Next Move
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column justify-lg-space-between bg-white mb-4 ">
                {/* Correct Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex flex-md-row flex-sm-row justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={GreenTick} width="20px" height="20px" />
                  </div>
                  <div className="">Correct Prediction</div>
                </div>
                {/* Incorrect Prediction */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={RedCross} width="20px" height="20px" />
                  </div>
                  <div className="">Incorrect Prediction</div>
                </div>

                {/* Not Confident Enough */}
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-center justify-content-md-start justify-content-sm-start align-items-center">
                  <div className="pe-3">
                    <img src={YellowNeutral} width="20px" height="20px" />
                  </div>
                  <div className="">Not Confident Enough</div>
                </div>
                {/* Not Confident Enough ^^^^ */}
              </div>
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
            {/* Current Prediction Timeline */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-lg-row flex-md-column flex-sm-column bg-light justify-content-lg-between ">
              <div className="">
                <div className="p  d-md-flex d-sm-flex  justify-content-md-center justify-content-sm-center">
                  Current Prediction Timeline
                </div>
                <div className="d-lg-flex d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>5:00 PM - 6:00 PM</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Reference Price
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>$44,367.16</b>
                </div>
              </div>
              <div className="">
                <div className="p d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  Expected Next Move
                </div>
                <div className="d-md-flex d-sm-flex justify-content-lg-start justify-content-md-center justify-content-sm-center">
                  <b>Not Confident Enough</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ATR Percentage Plot */}

      <div className="container bg-white mb-4 ">
        <div className="d-lg-flex d-md-flex d-sm-flex flex-sm-column flex-lg-row flex-md-column flex-sm-column ">
          <div className="col-lg-12 col-md-12 col-sm-12 bg-light p-3">
            {/* Heading And Row 1st Row */}
            <div className="d-lg-flex d-md-flex d-sm-flex flex-grow-1 flex-lg-row flex-md-column flex-sm-column justify-content-between mb-3">
              <div className="d-flex justify-content-start align-items-center">
                {/* Metrics Heading */}
                <h3 className="me-3">F1 Score Metrics</h3>
                <img src={iIcon} width="24px" height="24px" />
              </div>
              {/* Date  */}
              <div className="d-lg-flex  d-md-flex d-sm-flex flex-md-row flex-lg-row flex-sm-row flex-grow-1  bg-white justify-content-md-around align-items-md-center justify-content-sm-around align-items-sm-center justify-content-lg-around">
                <div className="d-flex justify-content-center ">
                  <div className="">1D</div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="">7D</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">3M</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">1Y</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">ALL</div>
                </div>

                <div className="d-flex justify-content-center">
                  <div className="">
                    <img src={Calender} />
                  </div>
                </div>
              </div>
            </div>
            {/* Full Row  of graph*/}
            <div className="p-4 bg-white mb-4">
              {/* Graph F1 Metrics Score Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white">
                <div>
                  <img
                    className=""
                    src={GraphF1MetricsScore}
                    class="img-fluid"
                  />
                </div>
              </div>
              {/* Graph F1 Metrics Score Graph ^^^^*/}
              {/* Line Graph */}
              <div className="d-flex justify-content-center align-items-center bg-white mb-3 ">
                <div>
                  <img src={LineGraph} class="img-fluid" />
                </div>
              </div>
              {/* Line Graph ^^^^^*/}
            </div>
          </div>
        </div>
      </div>

      {/* ATR Percentage Plot ^^^^^ */}

      {/* Disclaimer */}
      <Disclaimer />

      {/* Disclaimer ^^^^ */}

      <Footer />
    </div>
  );
};

export default CryptoProfilePage;
