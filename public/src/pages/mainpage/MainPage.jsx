import React from "react";

import Illustration from "../../assets/Illustration.svg";
import AutomatedTrendPredictions from "../../assets/AutomatedTrendPredictions.svg";
import AdvancedFinancialMachineLearning from "../../assets/AdvancedFinancialMachineLearning.svg";
import AppliedAI from "../../assets/AppliedAI.svg";
import ExplainableAI from "../../assets/ExplainableAI.svg";
import StatisticalEmpiricalApproach from "../../assets/StatisticalEmpiricalApproach.svg";
import TransparentHistoricalCharts from "../../assets/TransparentHistoricalCharts.svg";
import Ranging from "../../assets/Ranging.svg";
import Minus from "../../assets/Minus.svg";
import Tick from "../../assets/Tick.svg";
import Subtract from "../../assets/Subtract.svg";
import Investmoney from "../../assets/Investmoney.svg";
import Prediction from "../../assets/Prediction.svg";
import Howitworks from "../../assets/Howitworks.svg";

import MainHeader from "../../components/MainHeader";
import Footer from "../../components/Footer";

const MainPage = () => {
  return (
    <>
      <MainHeader />
      <div className="container-fluid  g-0  mb-3 pb-1">
        <div className="d-flex flex-row justify-content-start  p-5">
          <div className="w-50">
            {/* Flag */}
            {/* <div className="d-flex justify-content-start ">
              <div className="d-flex justify-content-center align-items-between ">
                <div className=" z-index-n2 w-120 h-32">
                  <img src={Subtract}></img>
                </div>
              </div>
              <div className="d-flex justify-content-start align-items-start">
                <div className="position-absolute z-index-n1 mt-1 ">
                  <text>
                    <h6>
                      <b>Basic</b>
                    </h6>
                  </text>
                </div>
              </div>
            </div> */}

            <div className="d-flex justify-content-start  align-items-start">
              <div className="d-flex justify-content-start  align-items-start">
                <img src={Subtract} className="img-responsive"></img>
              </div>
              <div className="d-flex justify-content-between align-items-between position-absolute ms-4">
                <span className=" overlay-text">
                  <b>Machine</b>
                </span>
              </div>
            </div>

            {/* End */}
            <div className="h1 mb-4">
              CryptoGenie is a yantra which predicts the directional trend of
              select crypto assets
            </div>
            <div className="h7 mb-5">
              It uses advanced financial machine learning concepts and
              techniques to create models that generate predictive trends for
              crypto assets.
            </div>
            <div
              type="button"
              className=" d-flex justify-content-center align-items-center w-256 h-56 text-light mb-5"
              style={{
                backgroundColor: "#6237DE",
                fontSize: "16px",
              }}
            >
              Go to prediction
            </div>
            <div className="d-flex flex-row">
              <div className="border-end pe-5">
                <div>
                  <b>30 minutes</b>
                </div>
                <div>New analytical result </div>
              </div>
              <div className="ps-5">
                <div>
                  <b>High prediction accuracy</b>
                </div>
                <div>A new level of AI</div>
              </div>
            </div>
          </div>
          <div classNme="w-669 h-613">
            <img className="w-100 h-100" src={Illustration}></img>
          </div>
        </div>
      </div>
      <div className="mb-3 pb-1">
        <hr></hr>
      </div>
      <div className="container-fluid d-flex justify-content-center g-0 mt-3 pt-1 mb-5 pb-5 ">
        <div className="w-1060 ">
          <div className="d-flex flex-row justify-content-between mb-5 pb-5">
            <div className="w-480 h2">
              <b>Features</b>
            </div>
            <div className="w-480">
              It uses advanced financial machine learning concepts and
              techniques to create models that generate predictive trends for
              crypto assets.
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4 mt-2">
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={AutomatedTrendPredictions}></img>
              </div>
              <div className="h3 mb-3">Automated Trend Predictions</div>
              <div className="p">
                We provide 24 x 7 trend predictions which are valid for 30
                minute window. Investors can use this trend information to enter
                trades with confidence. Aside from the current prediction
                window, one can also view the past trend predictions and its
                metrics.
              </div>
            </div>
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={AdvancedFinancialMachineLearning}></img>
              </div>
              <div className="h3 mb-3">Advanced Financial Machine Learning</div>
              <div className="p">
                We use cutting edge financial machine learning techniques to
                overcome real-world investment problems. Our fully proven
                approaches to data preparation, use of primary and secondary
                models, feature importance and commissioning ensures superior
                performance.
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4 mt-2">
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={StatisticalEmpiricalApproach}></img>
              </div>
              <div className="h3 mb-3">Statistical & Empirical Approach</div>
              <div className="p">
                Standard machine learning techniques are too simplistic when
                applied to financial domains. We apply more sophisticated
                techniques to ensure we avoid false positives in most financial
                predictions. Our empirical approach focuses on real world
                analysis opposite to pure theory.
              </div>
            </div>
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={TransparentHistoricalCharts}></img>
              </div>
              <div className="h3 mb-3">Transparent Historical Charts</div>
              <div className="p">
                We provide historical charts of prediction metrics. For e.g.
                accuracy, f1-score, precision, recall etc among others. These
                historical metrics can then be used to evaluate the efficacy of
                the prediction algorithm over time..
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-4 mt-2">
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={ExplainableAI}></img>
              </div>
              <div className="h3 mb-3">eXplainable AI (XAI)</div>
              <div className="p">
                Standard machine learning techniques are too simplistic when
                applied to financial domains. We apply more sophisticated
                techniques to ensure we avoid false positives in most financial
                predictions. Our empirical approach focuses on real world
                analysis opposite to pure theory.
              </div>
            </div>
            <div className="w-480">
              <div className="w-80 h-80 mb-4">
                <img src={AppliedAI}></img>
              </div>
              <div className="h3 mb-3">Applied AI</div>
              <div className="p">
                We have developed a state of the art end-to-end architecture for
                delivering high quality predictions seamlessly and continuously.
                Our infrastructure takes care of data ingest, validation,
                transformation, feature extraction and prediction automatically.
                It is designed to be secure, scalable and resilient. We
                regularly work on improving the concept so that we can deploy
                newer and better models.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* How it work Section */}
      <div className="container-fluid g-0 d-flex justify-content-center mt-5 pt-5">
        <div className="w-1090 ">
          <div className="h2 mb-3 pb-3">
            <b>How it works</b>
          </div>
          <div className="d-flex flex-row justify-content-between mt-1 w-1090 h-550 mt-4 pt-4">
            <img src={Howitworks}></img>
          </div>

          {/* <div className="d-flex flex-row justify-content-between mt-1">
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
          </div> */}
        </div>
      </div>
      <div className="my-5 py-5">
        <hr></hr>
      </div>

      {/* Pricing */}

      <div className="container-fluid g-0">
        <div className=" h2 d-flex justify-content-center align-items-center mb-4">
          <b>Pricing</b>
        </div>

        <div className="d-flex mb-5 justify-content-center align-items-center ">
          It uses advanced financial machine learning concepts and techniques
          <br /> to create models that generate predictive trends for crypto
          assets.
        </div>

        {/* Cards */}
        <div className="d-flex justify-content-around align-items-around pb-2 mb-5">
          {/* First Cards */}
          <div className="w-304 h-504">
            <div className="card w-304 h-504">
              <div class="card-header bg-white border-0">
                <hr className="h-8 mt-3"></hr>
                <div className="h3 mt-4 d-flex justify-content-center">
                  <b>Free</b>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                  Lorem ipsum dolor sit amet,
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-between ">
                    <div className="position-absolute z-index-n2 w-120 h-32">
                      <img src={Subtract}></img>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-between">
                    <div className="position-absolute z-index-n1 mt-1 ">
                      <text>
                        <h6>
                          <b>Basic</b>
                        </h6>
                      </text>
                    </div>
                  </div>

                  <div className="postion-realative">
                    <hr className="w-100 mb-5"></hr>
                  </div>
                </div>
              </div>
              <div class="card-body bg-white">
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
              </div>
              <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                <div
                  type="button"
                  className=" d-flex justify-content-center align-items-center w-256 h-56 text-light"
                  style={{
                    backgroundColor: "#6237DE",
                    fontSize: "16px",
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>
          {/* Second Card */}
          <div className="w-304 h-504">
            <div className="card w-304 h-504">
              <div class="card-header bg-white border-0">
                <hr className="h-8 mt-3"></hr>
                <div className="h3 mt-4 d-flex justify-content-center">
                  <b>Free</b>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                  Lorem ipsum dolor sit amet,
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-between ">
                    <div className="position-absolute z-index-n2 w-120 h-32">
                      <img src={Subtract}></img>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-between">
                    <div className="position-absolute z-index-n1 mt-1 ">
                      <text>
                        <h6>
                          <b>Basic</b>
                        </h6>
                      </text>
                    </div>
                  </div>

                  <div className="postion-realative">
                    <hr className="w-100 mb-5"></hr>
                  </div>
                </div>
              </div>
              <div class="card-body bg-white">
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
              </div>
              <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                <div
                  type="button"
                  className=" d-flex justify-content-center align-items-center w-256 h-56 text-light"
                  style={{
                    backgroundColor: "#6237DE",
                    fontSize: "16px",
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>
          {/* Third Card */}
          <div className="w-304 h-504">
            <div className="card w-304 h-504">
              <div class="card-header bg-white border-0">
                <hr className="h-8 mt-3"></hr>
                <div className="h3 mt-4 d-flex justify-content-center">
                  <b>Free</b>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                  Lorem ipsum dolor sit amet,
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-between ">
                    <div className="position-absolute z-index-n2 w-120 h-32">
                      <img src={Subtract}></img>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-between">
                    <div className="position-absolute z-index-n1 mt-1 ">
                      <text>
                        <h6>
                          <b>Basic</b>
                        </h6>
                      </text>
                    </div>
                  </div>

                  <div className="postion-realative">
                    <hr className="w-100 mb-5"></hr>
                  </div>
                </div>
              </div>
              <div class="card-body bg-white">
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
              </div>
              <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                <div
                  type="button"
                  className=" d-flex justify-content-center align-items-center w-256 h-56 text-light"
                  style={{
                    backgroundColor: "#6237DE",
                    fontSize: "16px",
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="w-304 h-504">
            <div className="card w-304 h-504">
              <div class="card-header bg-white border-0">
                <hr className="h-8 mt-3"></hr>
                <div className="h3 mt-4 d-flex justify-content-center">
                  <b>Free</b>
                </div>
                <div className="d-flex justify-content-center mt-4 mb-3">
                  Lorem ipsum dolor sit amet,
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-between ">
                    <div className="position-absolute z-index-n2 w-120 h-32">
                      <img src={Subtract}></img>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-between">
                    <div className="position-absolute z-index-n1 mt-1 ">
                      <text>
                        <h6>
                          <b>Basic</b>
                        </h6>
                      </text>
                    </div>
                  </div>

                  <div className="postion-realative">
                    <hr className="w-100 mb-5"></hr>
                  </div>
                </div>
              </div>
              <div class="card-body bg-white">
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
                <div className="d-flex">
                  <img className="w-20 h-20 me-3 mt-1" src={Tick}></img>
                  <div>
                    BTCUSDT <br></br>
                    Charts & current predictions
                  </div>
                </div>
              </div>
              <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                <div
                  type="button"
                  className=" d-flex justify-content-center align-items-center w-256 h-56 text-light"
                  style={{
                    backgroundColor: "#6237DE",
                    fontSize: "16px",
                  }}
                >
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Invest Money call to action */}
        <div className="container-fluid g-0 d-flex justify-content-center align-items-center mb-5 pb-5">
          <div className="d-flex justify-content-start  pt-4 mt-5">
            <div className="w-1088 h-376">
              <img src={Investmoney}></img>
            </div>
            <div className="position-absolute mt-5 pt-1 ms-5 ps-1 text-white mb-3">
              <div className="h2 ">
                <b>
                  Invest your money to the <br />
                  CryptoGenie and earn more <br />
                  money
                </b>
              </div>

              <div
                type="button"
                className=" d-flex mt-4 justify-content-center align-items-center w-240 h-56 text-light"
                style={{
                  backgroundColor: "#6237DE",
                  fontSize: "16px",
                }}
              >
                Invest in CryptoGenie
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Prediction */}
      <div className="container-fluid g-0 d-flex flex-row justify-content-center align-items-center h-400 mt-5 pt-5">
        <div className="w-438 me-5 ">
          <img src={Prediction} />
        </div>
        <div className="ms-5">
          <div className="h2 mb-4">
            <b>
              Get trend predictions for<br></br> crypto currencies at 30 min
              <br></br> periods.
            </b>
          </div>
          <div className="mb-4">
            This will help you discern the trends per each crypto asset.
          </div>
          <div
            type="button"
            className=" d-flex justify-content-center align-items-center w-256 h-56 text-light"
            style={{
              backgroundColor: "#6237DE",
              fontSize: "16px",
            }}
          >
            Get Started
          </div>
        </div>
      </div>

      <Footer />
      {/* </div> */}
    </>
  );
};

export default MainPage;
