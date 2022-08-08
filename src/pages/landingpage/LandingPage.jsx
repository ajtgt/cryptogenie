import React from "react";
import { useHistory, Link } from "react-router-dom";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Machine from "../../assets/LandingPage/Machine.svg";
import Illustration from "../../assets/LandingPage/Illustration.svg";
import Arrows from "../../assets/LandingPage/Arrows.svg";
import Feature1 from "../../assets/LandingPage/Feature1.svg";
import Feature2 from "../../assets/LandingPage/Feature2.svg";
import Feature3 from "../../assets/LandingPage/Feature3.svg";
import Feature4 from "../../assets/LandingPage/Feature4.svg";
import Feature5 from "../../assets/LandingPage/Feature5.svg";
import Feature6 from "../../assets/LandingPage/Feature6.svg";
import HowItWorks from "../../assets/LandingPage/HowItWorks.svg";
import InvestToCryptoGenie from "../../assets/LandingPage/InvestToCryptoGenie.svg";
import InvestToCryptoGenieMobile from "../../assets/LandingPage/InvestToCryptoGenieMobile.svg";
import GoToPredictions from "../../assets/LandingPage/GoToPredictions.svg";
import HowItWorksMobile from "../../assets/LandingPage/HowItWorksMobile.svg";
import Map from "../../assets/LandingPage/Map.svg";
import Logo from "../../assets/Header/Logo.svg";

import PricingCards from "../../components/PricingCards";

const LandingPage = () => {
  let history = useHistory();
  const Prediction = () => {
    history.push("/trendprediction");
  };
  return (
    <div>
      <Header />
      {/* Machine Row Container  */}
      <div className="container mb-5">
        <div className="row m-0 my-5">
          {/* Machine Column */}
          <div className="col-sm-6 col-12 px-0 order-xs-2 order-sm-1">
            <div className="mb-4">
              <img className="img-fluid" src={Machine} />
            </div>
            <div className="h1 mb-4">
              CryptoGenie is a yantra which predicts the directional trend of
              select crypto assets
            </div>
            <div className="mb-5">
              It uses advanced financial machine learning concepts and
              techniques to create models that generate predictive trends for
              crypto assets.
            </div>
            <div class="d-flex d-sm-flex justify-content-center justify-content-sm-start">
              <div
                onClick={Prediction}
                type="button"
                class="col-11 col-sm-4 btn btn-primary mt-3 mb-5 "
              >
                Go To Predictions
              </div>
            </div>
            <div className="d-flex mb-5">
              <div className="border-end pe-5">
                <div>
                  <b>30 minutes</b>
                </div>
                <div>New analytical result </div>
              </div>

              <div className=" ps-5">
                <div>
                  <b>High prediction accuracy</b>
                </div>
                <div>A new level of AI</div>
              </div>
            </div>
          </div>

          {/* Machine Column ^^^^^^^^^*/}
          {/* Timer Column with Image */}
          <div className="col-sm-6 col-12 px-0 order-xs-2 order-sm-1">
            <img src={Illustration} className="img-fluid" />
          </div>
          {/* Timer Column with Image ^^^^^^^^^*/}
        </div>
        {/* Machine Row ^^^^  */}
      </div>
      {/* Machine Row Container ^^^^ */}

      {/* Arrow Line start  */}
      <div className=" py-5">
        <img className="w-100" src={Arrows} />
      </div>

      {/* Arrow Line End */}

      {/* Features */}

      <div className="container mt-5">
        {/* Feature Heading */}
        <div className="row mb-5">
          <div className="col-sm-6 col-12 h2">Featues</div>
          <div className="col-sm-6 col-12">
            It uses advanced financial machine learning concepts and techniques
            to create models that generate predictive trends for crypto assets.
          </div>
        </div>
        {/* Feature Heading ^^^^*/}

        {/* All -Feature Conatainer  */}

        <div className="conatiner mb-5 pb-5">
          {/* First Row Start */}
          <div className="row">
            {/* First Row Column 1 start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature1} className="img-fluid mb-4" />
                <div className="h3 mb-5">Automated Trend Predictions</div>
                <div className="p">
                  We provide 24 x 7 trend predictions which are valid for 30
                  minute window. Investors can use this trend information to
                  enter trades with confidence. Aside from the current
                  prediction window, one can also view the past trend
                  predictions and its metrics.
                </div>
              </div>
            </div>
            {/* First Row Column 1 end */}

            {/* First Row Column 2 Start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature2} className="img-fluid mb-4" />
                <div className="h3 mb-5">
                  Advanced Financial Machine Learning
                </div>
                <div className="p">
                  We use cutting edge financial machine learning techniques to
                  overcome real-world investment problems. Our fully proven
                  approaches to data preparation, use of primary and secondary
                  models, feature importance and commissioning ensures superior
                  performance.
                </div>
              </div>
            </div>
            {/* First Row Column 2 End */}
          </div>
          {/* First Row End */}

          {/* Second Row Start  */}
          <div className="row">
            {/* First Row Column 1 start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature3} className="img-fluid mb-4" />
                <div className="h3 mb-5">Statistical & Empirical Approach</div>
                <div className="p">
                  Standard machine learning techniques are too simplistic when
                  applied to financial domains. We apply more sophisticated
                  techniques to ensure we avoid false positives in most
                  financial predictions. Our empirical approach focuses on real
                  world analysis opposite to pure theory.
                </div>
              </div>
            </div>
            {/* First Row Column 1 end */}

            {/* First Row Column 2 Start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature4} className="img-fluid mb-4" />
                <div className="h3 mb-5">Transparent Historical Charts</div>
                <div className="p">
                  We provide historical charts of prediction metrics. For e.g.
                  accuracy, f1-score, precision, recall etc among others. These
                  historical metrics can then be used to evaluate the efficacy
                  of the prediction algorithm over time.
                </div>
              </div>
            </div>
            {/* First Row Column 2 End */}
          </div>

          {/* Second Row End */}

          {/* Third Row Start */}
          <div className="row">
            {/* First Row Column 1 start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature5} className="img-fluid mb-4" />
                <div className="h3 mb-5">eXplainable AI (XAI)</div>
                <div className="p">
                  Most AI/ML predictions are black boxes. One cannot interpret
                  or understand the predictions made by the models. Our models
                  have been built using interpretable and inclusive features
                  that produce more explainable models, while maintaining a high
                  level of prediction performance. We achieve this by extracting
                  features that explain the underlying model classification
                  across our asset universe.
                </div>
              </div>
            </div>
            {/* First Row Column 1 end */}

            {/* First Row Column 2 Start */}
            <div className="col-sm-6 col-12">
              <div className="mb-4">
                <img src={Feature1} className="img-fluid mb-4" />
                <div className="h3 mb-5">Applied AI</div>
                <div className="p">
                  We have developed a state of the art end-to-end architecture
                  for delivering high quality predictions seamlessly and
                  continuously. Our infrastructure takes care of data ingest,
                  validation, transformation, feature extraction and prediction
                  automatically. It is designed to be secure, scalable and
                  resilient. We regularly work on improving the concept so that
                  we can deploy newer and better models.
                </div>
              </div>
            </div>
            {/* First Row Column 2 End */}
          </div>
          {/* Third Row End */}
        </div>
      </div>
      {/* Features ^^^^ */}

      {/* How It Works Start */}
      <div className="container mt-5 pt-5 d-none d-sm-block d-md-none">
        <div className="row h2 mb-5">
          <div className="col-12 col-sm-12">How It Works</div>
        </div>
        {/* How it works in Image Desktop View Start */}
        <div className="row">
          <div className="col-12 col-sm-12 ">
            <img className="img-fluid mt-4" src={HowItWorks}></img>
          </div>
        </div>
      </div>
      {/* How it works in Image Desktop View  End */}

      {/* How it works in Image Mobile View Start */}
      <div className="container mt-5 pt-5 d-block d-sm-none">
        <div className="row">
          <div className="col-12 col-sm-12">
            <img className=" img-fluid mt-4" src={HowItWorksMobile}></img>
          </div>
        </div>
      </div>

      {/* How it works in Image Mobile View End */}

      {/* How It Works End ^^^^ */}

      <div className="py-5 my-5">
        <img className="w-100" src={Arrows} />
      </div>

      {/* Pricing */}

      <div className="container mb-5 pb-5">
        <div className="d-flex d-sm-flex justify-content-start justify-content-sm-center h2 mb-4">
          Pricing
        </div>
        <div className=" h6 d-flex d-sm-flex justify-content-start justify-content-sm-center mb-5">
          <div className="col-sm-6 col-12">
            It uses advanced financial machine learning concepts and techniques
            to create models that generate predictive trends for crypto assets.
          </div>
        </div>

        {/* Cards */}
        <div className="row d-sm-flex flex-sm-row d-none d-sm-block g-3 ">
          <div className="col-sm-6 col-md-3">
            <PricingCards />
          </div>
          <div className="col-sm-6 col-md-3">
            <PricingCards />
          </div>
          <div className="col-sm-6 col-md-3">
            <PricingCards />
          </div>
          <div className="col-sm-6 col-md-3">
            <PricingCards />
          </div>
        </div>
        {/* Cards ^^^*/}

        {/* Caurosel Cards Start */}

        {/* <div className="row d-sm-flex flex-sm-row d-block d-sm-none"> */}
        <div className="row d-flex flex-row d-block d-sm-none">
          <div
            id="carouselExampleIndicators"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="row">
                  <div className="col-12">
                    <PricingCards />
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <PricingCards />
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <PricingCards />
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="row">
                  <div className="col-12">
                    <PricingCards />
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Caurosel Cards End */}
      </div>
      {/* Pricing ^^^^^ */}

      {/* Invest your Money In Crypto Genie */}
      <div className="container d-sm-flex flex-sm-row d-none d-sm-block my-5 py-5">
        <div className="card ">
          <img src={InvestToCryptoGenie} className="img-fluid card-img-top" />
          <div class="card-img-overlay card-inverse p-5">
            <div className="row text-white mt-5 h2">
              <div className="col-sm-8">
                Invest your money to the CryptoGenie and earn more money
              </div>

              <div>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  type="button"
                  className="btn btn-primary mt-5"
                >
                  Contact Us
                </button>
                {/* Contact Us Modal Start  */}
                <div
                  class="modal fade"
                  id="staticBackdrop"
                  data-bs-backdrop="static"
                  data-bs-keyboard="false"
                  tabindex="-1"
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog modal-xl">
                    <div class="modal-content">
                      <div class="modal-body">
                        <div className="row">
                          <div className="col-12 col-sm-12  col-lg-4 d-flex flex-column align-items-between p-5">
                            <div>
                              <div className="d-flex justify-content-between mb-3 ">
                                <img
                                  src={Logo}
                                  className="img-fluid"
                                  width="170px"
                                  height="40px"
                                />
                                <button
                                  type="button"
                                  class="btn-close btn-sm  d-lg-none"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                            </div>

                            <p className="text-dark mb-5">
                              <h6>
                                Get smarter about understanding crypto assets.
                                Gain an edge over other investors.
                              </h6>
                            </p>
                            <img src={Map} className="img-fluid" />
                          </div>
                          <div className="col-12 col-sm-12 col-lg-8 p-5">
                            <div className="d-sm-flex justify-content-between mb-5">
                              <div className="text-dark">
                                <h2>Contact Us</h2>
                              </div>
                              <div className="d-none d-lg-block ">
                                <button
                                  type="button"
                                  class="btn-close btn-sm"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="firstname"
                                  placeholder="First Name"
                                />
                              </div>
                              <div class="col-md-6 mb-3">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="lastname"
                                  placeholder="Last Name"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12">
                                <input
                                  type="text"
                                  class="form-control"
                                  id="email"
                                  placeholder="Your Email Address"
                                />
                              </div>
                            </div>
                            <div className="row mb-3">
                              <div className="col-md-12 mb-3">
                                <select
                                  class="form-select"
                                  aria-label="Default select example"
                                >
                                  <option selected>Choose Subject</option>
                                  <option value="1">Choose subject</option>
                                  <option value="2">General</option>
                                  <option value="3">Account Related</option>
                                  <option value="4">Enterprise Related</option>
                                  <option value="5">Others</option>
                                </select>
                              </div>
                              <div className="col-md-12 mb-3">
                                <textarea
                                  class="form-control"
                                  id="Messagae"
                                  rows="3"
                                  placeholder="Message"
                                ></textarea>
                                <div className="d-flex justify-content-end text-dark h6">
                                  0/250 Characters left
                                </div>
                              </div>
                              <div className="">
                                <button
                                  type="button"
                                  class="btn btn-primary col-md-12"
                                >
                                  Send
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Contact Us Modal End  */}
              </div>
            </div>
          </div>
        </div>
        {/* <img src={InvestToCryptoGenie} className="img-fluid" /> */}
      </div>
      {/* Invest your Money In Crypto Genie Mobile View */}

      <div className="container d-flex flex-row d-block d-sm-none my-5 py-5">
        <div className="card">
          <img
            src={InvestToCryptoGenieMobile}
            className="img-fluid card-img-top"
          />
          <div class="card-img-overlay card-inverse">
            <div className="text-white mt-5">
              Invest your money to the CryptoGenie and earn more money
              <div>
                <button type="button" className="btn btn-primary mt-4">
                  Invest to CryptoGenie
                </button>
              </div>
              {/* <div className="row d-flex mt-4">
                <div type="button" className="col-10 btn btn-primary ">
                  <button type="button" className="btn-primary ">
                    Invest to CryptoGenie
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Invest your Money In Crypto Genie ^^^^^^*/}

      {/* Get trend predictions In Crypto Genie */}
      <div className="container mb-5 pb-5 ">
        <div className="row">
          <div className="col-sm-6 d-none d-sm-block ">
            <img src={GoToPredictions} className="img-fluid" />
          </div>
          <div className="col-12 col-sm-6">
            <div className="h2 mb-4">
              Get trend predictions for crypto currencies at 30 min periods.
            </div>
            <div className="h5 mb-4 pb-4">
              This will help you discern the trends per each crypto asset.
            </div>
            <div className="d-flex d-sm-flex justify-content-center justify-content-sm-start">
              <div
                onClick={Prediction}
                type="button"
                class="col-10 col-sm-4 btn btn-primary  "
              >
                Go To Predictions
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Get trend predictions In Crypto Genie ^^^^ */}

      <Footer />
    </div>
  );
};

export default LandingPage;
