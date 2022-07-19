import React from "react";

import Btccoin from "../assets/Btccoin.svg";
import Tcoin from "../assets/Tcoin.svg";
import SandClock from "../assets/SandClock.svg";
import ArrowBtn from "../assets/ArrowBtn.svg";
import ProgressLine from "../assets/ProgressLine.svg";
import CircleRatio from "../assets/CircleRatio.svg";
import Circle from "../assets/Circle.svg";
import Ranging from "../assets/Ranging.svg";
import Minus from "../assets/Minus.svg";

const TrendCards = () => {
  return (
    <div>
      <div className="m-5  px-3 bg-light rounded  py-3">
        {/* First Row */}
        <div className="d-flex flex-row justify-content-between align-items-center mb-4">
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
        {/* Second Row with Data */}
        <div className="d-flex flex-row justify-content-between mb-4">
          {/* First column */}
          <div className="">
            Last
            <br />
            30 Days
          </div>
          {/* Second Column Progress Line*/}
          <div className="d-flex flex-column">
            <div className="d-flex flex-row justify-content-center align-items-center">
              Correct Predictions: <div className="text-purple">235</div>
              /477
            </div>
            <div className="h-8 w-192">
              <img src={ProgressLine} />
            </div>
          </div>
          {/* Third Column Circle Ratio */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Fourth Column */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Fifth Column */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Sixth Column */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Seventh Column  */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Eight Column */}
          <div className="d-flex flex-row">
            <div className="d-flex flex-column">
              <div>Accuracy</div>
              <div>49.90%</div>
            </div>
            <div className="">
              <img src={CircleRatio}></img>
            </div>
          </div>
          {/* Ninth column */}
          <div className="">
            <img src={Circle}></img>
          </div>
          {/* End Prediction Column */}
        </div>
        {/* Third Row Cards */}
        <div className="d-flex flex-row justify-content-between ">
          {/* Card 1 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-164 h-224 border bg-white">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
          {/* Card 7 */}

          <div className="w-164 h-224 border">
            <div className="d-flex justify-content-center mt-3 ">
              <b>6:00 AM -6:30 AM</b>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className="w-100 h-56 mb-2">
              <img src={Ranging}></img>
            </div>

            <div className="d-flex justify-content-center align-items-center mb-3">
              36591.63 USDT
            </div>
            <div className=" d-flex justify-content-center">
              <div
                className="w-132 h-40  d-flex justify-content-center btn-gray"
                type="btn"
              >
                <div className="me-3  d-flex justify-content-center align-items-center">
                  <img className="w-8 h-8.5 " src={Minus} />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  No Action
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendCards;
