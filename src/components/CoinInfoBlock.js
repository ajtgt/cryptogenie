import React from "react";
import { Pie, PieChart } from "recharts";

import { useSelector } from "react-redux";

import TrendUp from "../assets/TrendPediction/TrendUp.svg";
import TrendDown from "../assets/TrendPediction/TrendDown.svg";
import Uncertain from "../assets/TrendPediction/Uncertain.svg";
import Ranging from "../assets/TrendPediction/Ranging.svg";
import PredictionCard from "../../src/assets/TrendPediction/PredictionCard.svg";
import NextButton from "../../src/assets/TrendPediction/NextButton.svg";
import Next from "../../src/assets/TrendPediction/Next.svg";

import CountDown from "./CountDown";

const CoinInfoBlock = (props) => {
  // Display  Minutes and Seconds using JavaScript

  const threshold = useSelector((state) => state.threshold.threshold);

  let value1 = Number(props?.datafromparent?.metrics?.f1_score * 100);
  let value2 = Number(props?.datafromparent?.metrics?.precision * 100);
  let value3 = Number(props?.datafromparent?.metrics?.recall * 100);
  let value4 = Number(props?.datafromparent?.metrics?.accuracy * 100);
  let value5 = Number(
    props?.datafromparent?.metrics?.prediction_capacity * 100
  );
  let value6 = Number(props?.datafromparent?.metrics?.tradable_capacity * 100);

  const data1 = [
    { name: "nothing", value: value1, fill: "#6237DE" },
    { name: "Empty", value: 100 - value1, fill: "#CCBAFD" },
  ];
  const data2 = [
    { name: "nothing", value: value2, fill: "#6237DE" },
    { name: "Empty", value: 100 - value2, fill: "#CCBAFD" },
  ];
  const data3 = [
    { name: "nothing", value: value3, fill: "#6237DE" },
    { name: "Empty", value: 100 - value3, fill: "#CCBAFD" },
  ];
  const data4 = [
    { name: "nothing", value: value4, fill: "#6237DE" },
    { name: "Empty", value: 100 - value4, fill: "#CCBAFD" },
  ];
  const data5 = [
    { name: "nothing", value: value5, fill: "#6237DE" },
    { name: "Empty", value: 100 - value5, fill: "#CCBAFD" },
  ];
  const data6 = [
    { name: "nothing", value: value6, fill: "#6237DE" },
    { name: "Empty", value: 100 - value6, fill: "#CCBAFD" },
  ];

  return (
    <div className="Coins p-3">
      <div className="px-3 py-5 bg-light">
        {/* Ticker Header */}

        <div className="d-lg-flex justify-content-lg-between mb-3">
          <div className="LeftSide d-lg-flex justify-content-lg-start">
            {/* First Coin  */}
            {props?.datafromparent?.base_asset === "BTC" &&
            props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/btc.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Bitcoin</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>

                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Second Coin */

            props?.datafromparent?.base_asset === "ETH" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/eth.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Etherium</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Third Coin */

            props?.datafromparent?.base_asset === "BNB" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Binance</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Fourth Coin */

            props?.datafromparent?.base_asset === "DOT" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/dot.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Polkadot</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Fifth Coin */
            props?.datafromparent?.base_asset === "ADA" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/ada.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Cardano</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Sixth Coin */
            props?.datafromparent?.base_asset === "ATOM" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/atom.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>ATOM</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : /* Seventh Coin */
            props?.datafromparent?.base_asset === "BTC" &&
              props?.datafromparent?.quote_asset === "USDT" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/btc.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Bitcoin</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Tether</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : // Eigth Coin
            props?.datafromparent?.base_asset === "ETH" &&
              props?.datafromparent?.quote_asset === "USDC" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/eth.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Etherium</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>USD Coin</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : // Ninth Coin
            props?.datafromparent?.base_asset === "BNB" &&
              props?.datafromparent?.quote_asset === "USDC" ? (
              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Binance</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>USD Coin</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            ) : (
              /* Tenth Coin */

              <div className="LeftSide  d-lg-flex justify-content-lg-center">
                <div className="Ticker1 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>Binance</h3>
                  </div>
                </div>

                <div className="Ticker2 d-lg-flex justify-content-center me-3">
                  <div className="me-3">
                    <img
                      src={
                        "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                      }
                      height="35px"
                      width="35px"
                    ></img>
                  </div>
                  <div>
                    <h3>USD Coin</h3>
                  </div>
                </div>
                <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                  <div style={{ color: "#6237de" }}>
                    {props?.datafromparent?.asset}
                  </div>
                </div>
              </div>
            )}

            <div className="Ticker1"></div>
            <div className="TickerName"></div>
          </div>
          <div className="RightSide d-lg-flex justify-content-lg-center">
            <div className="d-lg-flex flex-column justify-content-lg-cenetr align-items-lg-center">
              <img
                className="me-3"
                height="50px"
                width="50px"
                src={
                  "https://assets-cryptogenie.yantraka.ai/v1/icons_images/timer_gif_maker.gif"
                }
              />
            </div>
            <div className="d-flex flex-column">
              <div className="d-lg-flex  justify-content-lg-cenetr align-items-lg-start me-3">
                Next Prediction
              </div>
              {/* Timer */}
              <div className="d-lg-flex  justify-content-lg-cenetr align-items-lg-start me-3">
                <div>
                  <CountDown />
                </div>
              </div>
            </div>
            <div
              type="button"
              className="btn  d-lg-flex  justify-content-lg-cenetr align-items-lg-cenet"
              data-bs-toggle="modal"
              data-bs-target="#predModal"
            >
              <img src={NextButton} alt="" height="40px" width="40px" />
            </div>
            {/* Next Modal */}
          </div>
        </div>
        {/* Header - 1*/}

        <div className="d-lg-flex justify-content-lg-around">
          <div className="d-lg-flex flex-lg-column">
            <div>Last</div>
            <div>30 Days</div>
          </div>
          {/* Charts */}
          <div className="d-lg-flex flex-lg-column">
            <div>
              Correct Predictions:
              <span style={{ color: " #6237de" }}>262</span> / 542
            </div>

            <div className="progress">
              <div
                className="progress-bar progress-bar "
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  width: `${
                    props?.datafromparent?.metrics?.accuracy?.toFixed(2) * 100
                  }%`,
                  backgroundColor: "#6237DE",
                }}
              ></div>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div className="" style={{ fontSize: "0.8rem" }}>
                <b>F1 Score</b>
              </div>
              <div className="" style={{ color: " #6237de" }}>
                <b>
                  {props?.datafromparent?.metrics?.f1_score?.toFixed(2) * 100}%
                </b>
              </div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data1}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div style={{ fontSize: "0.8rem" }}>
                <b>Precision</b>
              </div>
              <div className="" style={{ color: " #6237de" }}>
                <b>
                  {props?.datafromparent?.metrics?.precision?.toFixed(2) * 100}%
                </b>
              </div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data2}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div style={{ fontSize: "0.8rem" }}>
                <b>Recall</b>
              </div>
              <div className="" style={{ color: " #6237de" }}>
                <b>
                  {props?.datafromparent?.metrics?.recall?.toFixed(2) * 100}%
                </b>
              </div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data3}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div style={{ fontSize: "0.8rem" }}>
                <b>Accuracy</b>
              </div>
              <div className="" style={{ color: " #6237de" }}>
                <b>
                  {props?.datafromparent?.metrics?.accuracy?.toFixed(2) * 100}%
                </b>
              </div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data4}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div style={{ fontSize: "0.8rem" }}>
                <b>Prediction Capacity</b>
              </div>
              <div className="blur">NA</div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data5}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>
          <div className="d-lg-flex flex-lg-row">
            <div className="d-lg-row flex-lg-column">
              <div style={{ fontSize: "0.8rem" }}>
                <b>Tradable Capacity</b>
              </div>

              <div className="blur">NA</div>
            </div>
            <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
              <PieChart width={40} height={40}>
                <Pie
                  data={data6}
                  outerRadius={18}
                  innerRadius={5}
                  paddingAngle={0}
                  dataKey="value"
                  fill="#6237de"
                />
              </PieChart>
            </div>
          </div>

          {/* Next Modal */}
          <div
            type="button"
            className="d-lg-flex flex-lg-row btn"
            data-bs-toggle="modal"
            data-bs-target="#NextModal"
          >
            <img src={Next} alt="Next" height="40px" width="40px" />
          </div>
          <div
            className="modal fade "
            id="NextModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header bg-light">
                  <div className="LeftSide d-lg-flex justify-content-lg-start">
                    {/* First Coin  */}
                    {props?.datafromparent?.base_asset === "BTC" &&
                    props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/btc.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Bitcoin</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>

                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Second Coin */

                    props?.datafromparent?.base_asset === "ETH" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/eth.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Etherium</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Third Coin */

                    props?.datafromparent?.base_asset === "BNB" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Binance</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Fourth Coin */

                    props?.datafromparent?.base_asset === "DOT" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/dot.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Polkadot</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Fifth Coin */
                    props?.datafromparent?.base_asset === "ADA" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/ada.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Cardano</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Sixth Coin */
                    props?.datafromparent?.base_asset === "ATOM" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/atom.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>ATOM</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : /* Seventh Coin */
                    props?.datafromparent?.base_asset === "BTC" &&
                      props?.datafromparent?.quote_asset === "USDT" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/btc.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Bitcoin</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdt.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Tether</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : // Eigth Coin
                    props?.datafromparent?.base_asset === "ETH" &&
                      props?.datafromparent?.quote_asset === "USDC" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/eth.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Etherium</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>USD Coin</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : // Ninth Coin
                    props?.datafromparent?.base_asset === "BNB" &&
                      props?.datafromparent?.quote_asset === "USDC" ? (
                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Binance</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>USD Coin</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Tenth Coin */

                      <div className="LeftSide  d-lg-flex justify-content-lg-center">
                        <div className="Ticker1 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/bnb.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>Binance</h3>
                          </div>
                        </div>

                        <div className="Ticker2 d-lg-flex justify-content-center me-3">
                          <div className="me-3">
                            <img
                              src={
                                "https://assets-cryptogenie.yantraka.ai/v1/coins/usdc.svg"
                              }
                              height="35px"
                              width="35px"
                            ></img>
                          </div>
                          <div>
                            <h3>USD Coin</h3>
                          </div>
                        </div>
                        <div className="d-lg-flex bg-white justify-content-lg-cenetr align-items-lg-cenetr p-3">
                          <div style={{ color: "#6237de" }}>
                            {props?.datafromparent?.asset}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="Ticker1"></div>
                    <div className="TickerName"></div>
                  </div>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body ">
                  {/* Accuracy */}
                  <div className="border-bottom my-2">
                    <div className="d-flex justify-content-between mb-3">
                      <div>Last 30 Days</div>
                      <div className="d-lg-flex flex-lg-column">
                        <div>
                          Correct Predictions:
                          <span style={{ color: " #6237de" }}>262</span> / 542
                        </div>
                        {/* <div>==================</div> */}
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar "
                            role="progressbar"
                            // aria-valuenow={
                            //   (100 * props?.datafromparent?.metrics?.correct_predictions) /
                            //   props?.datafromparent?.metrics?.predicted_rows
                            // }
                            aria-valuenow={0}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{
                              width: `${
                                props?.datafromparent?.metrics?.accuracy?.toFixed(
                                  2
                                ) * 100
                              }%`,
                              backgroundColor: "#6237DE",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div className="" style={{ fontSize: "0.8rem" }}>
                            <b>F1 Score</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.f1_score?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data1}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div style={{ fontSize: "0.8rem" }}>
                            <b>Precision</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.precision?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data2}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div style={{ fontSize: "0.8rem" }}>
                            <b>Recall</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.recall?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data3}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div style={{ fontSize: "0.8rem" }}>
                            <b>Accuracy</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.accuracy?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data4}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* True Positive */}
                  <div className=" border-bottom my-2 ">
                    <div className="d-flex justify-content-between">
                      <div className="">
                        <div>True Positive</div>
                        <div>
                          {props?.datafromparent?.metrics?.true_positives}
                        </div>
                      </div>
                      <div className="">
                        <div>False Positive</div>
                        <div>
                          {props?.datafromparent?.metrics?.false_positives}
                        </div>
                      </div>
                      <div className="">
                        <div>True Negative</div>
                        <div>
                          {props?.datafromparent?.metrics?.true_negative}
                        </div>
                      </div>
                      <div className="">
                        <div>False Negative</div>
                        <div>
                          {props?.datafromparent?.metrics?.false_negative}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Capacity */}
                  <div className="border-bottom my-2">
                    <div className="d-flex justify-content-around mb-3">
                      {/* Prediction Capacity */}
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div className="" style={{ fontSize: "0.8rem" }}>
                            <b>Prediction Capacity</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.prediction_capacity?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data1}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                      {/*  Tradable Capacity */}
                      <div className="d-lg-flex flex-lg-row">
                        <div className="d-lg-row flex-lg-column">
                          <div className="" style={{ fontSize: "0.8rem" }}>
                            <b>Tradable Capacity</b>
                          </div>
                          <div className="" style={{ color: " #6237de" }}>
                            <b>
                              {props?.datafromparent?.metrics?.tradable_capacity?.toFixed(
                                2
                              ) * 100}
                              %
                            </b>
                          </div>
                        </div>
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center">
                          <PieChart width={40} height={40}>
                            <Pie
                              data={data1}
                              outerRadius={18}
                              innerRadius={5}
                              paddingAngle={0}
                              dataKey="value"
                              fill="#6237de"
                            />
                          </PieChart>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Highest High Lowest Low */}
                  <div className="d-flex justify-content-around my-2">
                    <div className="d-flex flex-column ">
                      <div>Highest High 14</div>
                      <div>
                        {props?.datafromparent?.metadata?.highest_high_14}
                      </div>
                    </div>
                    <div className="d-flex flex-column mb-5">
                      <div>Lowest Low 14</div>
                      <div>
                        {props?.datafromparent?.metadata?.lowest_low_14}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards All */}
        <div className="d-lg-flex flex-lg-row px-1 py-1 justify-content-lg-around">
          {/* Card 1 */}
          <div className="CoinCards bg-white p-2 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranging"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img src={Uncertain} alt="uncertain" className="my-2" />
              )}
              {/* <img src={trendsvg} className="img-fluid" height="" width="" /> */}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[0]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 2 */}
          <div className="CoinCards bg-white p-3 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranning"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img
                  src={Uncertain}
                  alt="uncertain"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              )}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[1]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 3 */}
          <div className="CoinCards bg-white p-3 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranning"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img
                  src={Uncertain}
                  alt="uncertain"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              )}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[2]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 4 */}
          <div className="CoinCards bg-white p-3 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranning"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img
                  src={Uncertain}
                  alt="uncertain"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              )}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[3]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 5 */}
          <div className="CoinCards bg-white p-3 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranning"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img
                  src={Uncertain}
                  alt="uncertain"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              )}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[4]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 6 */}
          <div className="CoinCards bg-white p-3 m-1 card border-0">
            <div style={{ fontSize: ".8rem" }}>11:00 AM - 11:30 AM</div>
            <hr></hr>

            <div className="d-lg-flex ">
              {props?.datafromparent?.current?.trend === "ranging" ? (
                <img
                  src={Ranging}
                  alt="ranning"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "down" ? (
                <img
                  src={TrendDown}
                  alt="down"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : props?.datafromparent?.current?.trend === "up" ? (
                <img
                  src={TrendUp}
                  alt="up"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              ) : (
                <img
                  src={Uncertain}
                  alt="uncertain"
                  height="50px"
                  width="150px"
                  className="my-2"
                />
              )}
            </div>
            <div className="text-secondary d-lg-flex justify-content-center align-items-center">
              {props?.datafromparent?.previous[5]?.reference_price}
              <span>{props?.datafromparent?.quote_asset}</span>
            </div>
            <div
              type="btn"
              className="d-lg-flex justify-content-lg-center bg-light p-2 mt-3"
            >
              No Action
            </div>
          </div>
          {/* Card 7 */}
          <div className="CoinCards m-1 card border-0">
            <img src={PredictionCard} className="img-fluid h-100 w-100" />
          </div>
          {/* Cards All ^^^^^ */}
        </div>
      </div>
    </div>
  );
};

export default CoinInfoBlock;