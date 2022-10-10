import { React, useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import axios from "axios";
import { useSelector } from "react-redux";
import lottie from "lottie-web";

import plansData from "./plansData.json";

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

import HowItWorks from "../../assets/LandingPage/HowItWorks.svg";
import InvestToCryptoGenie from "../../assets/LandingPage/InvestToCryptoGenie.svg";
import InvestToCryptoGenieMobile from "../../assets/LandingPage/InvestToCryptoGenieMobile.svg";
import GoToPredictions from "../../assets/LandingPage/GoToPredictions.svg";
import HowItWorksMobile from "../../assets/LandingPage/HowItWorksMobile.svg";
import Map from "../../assets/LandingPage/Map.svg";

import YantrakaLogo from "../../assets/LandingPage/YantrakaLogo.svg";

import PricingCard from "../../components/PricingCard";
import PricingCardsM from "../../components/PricingCardsM";

const LandingPage = () => {
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState([]);

  const url =
    "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/plans";

  const config = {
    headers: {
      Authorization: token,
    },
  };

  const subjects = [
    "General",
    "Account Related",
    "Enterprise Related",
    "Others",
  ];

  async function fetchUserData() {
    const request = await axios.get(url, config);
    setUser(request.data);
    setLoading(false);

    return request;
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  // Formik
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First Name"),
      lastName: Yup.string().required("Last Name"),
      email: Yup.string().email().required("Email is invalid"),
      subject: Yup.string()
        .oneOf(subjects, "Select Subject")
        .required("Select Subject"),
      message: Yup.string().required("Text is required"),
    }),
    onSubmit: (values) => {},
  });

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Loader/Loader.json"),
    });
    return () => instance.destroy();
  }, []);

  return (
    <div>
      <Header />

      {/* Loader */}

      {loading && (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      )}
      {!loading && (
        <>
          {/* Machine Row Container  */}
          <div className="container mb-5" id="home">
            <div className="row m-0 my-5">
              {/* Machine Column */}
              <div className="col-sm-6 col-12 px-0 order-xs-2 order-sm-1">
                <div className="mb-4">
                  <img className="img-fluid" src={Machine} />
                </div>
                <div className="fs-1 fw-bold mb-4">
                  CryptoGenie is a yantra which predicts the directional trend
                  of select crypto assets
                </div>
                <div className="mb-5 ">
                  It uses advanced financial machine learning concepts and
                  techniques to create models that generate predictive trends
                  for crypto assets.
                </div>
                <div className="d-flex d-sm-flex justify-content-center justify-content-sm-start">
                  <a
                    type="button"
                    className="col-11 col-sm-4 btn btn-primary mt-3 mb-5 rounded-0 py-3"
                    href="trendprediction1"
                  >
                    Go To Predictions
                  </a>
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

          <div className="py-5">
            <img className="w-100" src={Arrows} />
          </div>

          {/* Arrow Line End */}

          {/* Features */}

          <div id="features" className="container mt-5">
            {/* Feature Heading */}
            <div className="row mb-5">
              <div className="col-sm-6 col-12 h2">Featues</div>
              <div className="col-sm-6 col-12">
                It uses advanced financial machine learning concepts and
                techniques to create models that generate predictive trends for
                crypto assets.
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
                      We use cutting edge financial machine learning techniques
                      to overcome real-world investment problems. Our fully
                      proven approaches to data preparation, use of primary and
                      secondary models, feature importance and commissioning
                      ensures superior performance.
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
                    <div className="h3 mb-5">
                      Statistical & Empirical Approach
                    </div>
                    <div className="p">
                      Standard machine learning techniques are too simplistic
                      when applied to financial domains. We apply more
                      sophisticated techniques to ensure we avoid false
                      positives in most financial predictions. Our empirical
                      approach focuses on real world analysis opposite to pure
                      theory.
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
                      We provide historical charts of prediction metrics. For
                      e.g. accuracy, f1-score, precision, recall etc among
                      others. These historical metrics can then be used to
                      evaluate the efficacy of the prediction algorithm over
                      time.
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
                      Most AI/ML predictions are black boxes. One cannot
                      interpret or understand the predictions made by the
                      models. Our models have been built using interpretable and
                      inclusive features that produce more explainable models,
                      while maintaining a high level of prediction performance.
                      We achieve this by extracting features that explain the
                      underlying model classification across our asset universe.
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
                      We have developed a state of the art end-to-end
                      architecture for delivering high quality predictions
                      seamlessly and continuously. Our infrastructure takes care
                      of data ingest, validation, transformation, feature
                      extraction and prediction automatically. It is designed to
                      be secure, scalable and resilient. We regularly work on
                      improving the concept so that we can deploy newer and
                      better models.
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

          <div id="pricing" className="container mb-5 pb-5">
            <div className="d-flex d-sm-flex justify-content-start justify-content-sm-center h2 mb-4">
              Pricing
            </div>
            <div className=" h6 d-flex d-sm-flex justify-content-start justify-content-sm-center mb-5">
              <div className="col-sm-6 col-12">
                It uses advanced financial machine learning concepts and
                techniques to create models that generate predictive trends for
                crypto assets.
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-lg-3 d-flex align-items-stretch">
                  <PricingCard
                    data={plansData[0]}
                    user={user[1]?.prices[0]?.id}
                  />
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                  <PricingCard
                    data={plansData[1]}
                    user={user[1]?.prices[0]?.id}
                  />
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                  <PricingCard
                    data={plansData[2]}
                    user={user[1]?.prices[0]?.id}
                  />
                </div>
                <div className="col-lg-3 d-flex align-items-stretch">
                  <PricingCard
                    data={plansData[3]}
                    user={user[1]?.prices[0]?.id}
                  />
                </div>
              </div>
            </div>

            <div className="row d-flex flex-row d-block d-sm-none">
              <div
                id="carouselExampleIndicators"
                className="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
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
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-12">
                        <PricingCardsM />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-12">
                        <PricingCardsM data={plansData} />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-12">
                        <PricingCardsM data={plansData} />
                      </div>
                    </div>
                  </div>

                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-12">
                        <PricingCardsM data={plansData} />
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          {/* Invest your Money In Crypto Genie */}
          <div className="container d-sm-flex flex-sm-row d-none d-sm-block my-5 py-5">
            <div className="card ">
              <img
                src={InvestToCryptoGenie}
                className="img-fluid card-img-top"
              />
              <div className="card-img-overlay card-inverse p-5">
                <div className="row text-white mt-5 h2">
                  <div className="col-sm-8">
                    Invest your money to the CryptoGenie and earn more money
                  </div>

                  <div>
                    <div
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      type="button"
                      className="row btn w- btn-primary mt-5 rounded-0 py-3 px-5 w-25"
                    >
                      Contact Us
                    </div>
                    {/* Contact Us Modal Start  */}
                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="row  ">
                              <div className="col-12 col-sm-12  col-lg-4 d-flex flex-column align-items-between p-4">
                                <div>
                                  <div className="d-flex justify-content-between mb-1 ">
                                    <img
                                      src={YantrakaLogo}
                                      className="img-fluid"
                                      width="322px"
                                      height="40px"
                                    />
                                    <button
                                      type="button"
                                      className="btn-close btn-sm  d-lg-none"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                </div>
                                <h6>
                                  <p className="text-dark mb-3">
                                    Get smarter about understanding crypto
                                    assets. Gain an edge over other investors.
                                  </p>
                                </h6>

                                <img src={Map} className="img-fluid" />
                              </div>
                              <div className="col-12 col-sm-12 col-lg-8 px-5 py-3">
                                <div className="d-sm-flex justify-content-between mb-5">
                                  <div className="text-dark">
                                    <h2>Contact Us</h2>
                                  </div>
                                  <div className="d-none d-lg-block ">
                                    <button
                                      type="button"
                                      className="btn-close btn-sm"
                                      data-bs-dismiss="modal"
                                      aria-label="Close"
                                    ></button>
                                  </div>
                                </div>

                                {/* Form Start ^^^^  */}
                                <form onSubmit={formik.handleSubmit}>
                                  <div className="row mb-3">
                                    <div className="col-md-6">
                                      {formik.touched.firstName &&
                                      formik.errors.firstName ? (
                                        <p
                                          className="text-danger m-0"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          {formik.errors.firstName}
                                        </p>
                                      ) : null}
                                      <input
                                        id="firstName"
                                        // name="firstName"
                                        type="text"
                                        placeholder="First Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                      />
                                    </div>

                                    <div className="col-md-6">
                                      {formik.touched.lastName &&
                                      formik.errors.lastName ? (
                                        <p
                                          className="text-danger m-0"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          {formik.errors.lastName}
                                        </p>
                                      ) : null}
                                      <input
                                        id="lastName"
                                        // name="lastName"
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col-md-12">
                                      {formik.touched.email &&
                                      formik.errors.email ? (
                                        <p
                                          className="text-danger m-0"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          {formik.errors.email}
                                        </p>
                                      ) : null}
                                      <input
                                        id="email"
                                        // name="email"
                                        type="email"
                                        placeholder="Your Email Address"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                      />
                                    </div>
                                  </div>
                                  <div className="row mb-3">
                                    <div className="col-md-12 mb-3">
                                      {formik.touched.subject &&
                                      formik.errors.subject ? (
                                        <p
                                          className="text-danger m-0"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          {formik.errors.subject}
                                        </p>
                                      ) : null}
                                      <select
                                        id="subject"
                                        // name="subject"
                                        onChange={formik.handleChange}
                                        value={formik.values.subject}
                                        onBlur={formik.handleBlur}
                                        className="form-select"
                                      >
                                        <option value="" disabled="disabled">
                                          Select Subject
                                        </option>
                                        {subjects.map((subject, index) => (
                                          <option value={subject} key={index}>
                                            {subject}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                      {formik.touched.message &&
                                      formik.errors.message ? (
                                        <p
                                          className="text-danger m-0"
                                          style={{ fontSize: "0.7rem" }}
                                        >
                                          {formik.errors.message}
                                        </p>
                                      ) : null}
                                      <textarea
                                        id="message"
                                        // name="message"
                                        type="text"
                                        placeholder="Message"
                                        onChange={formik.handleChange}
                                        value={formik.values.message}
                                        onBlur={formik.handleBlur}
                                        className="form-control"
                                        rows="3"
                                      ></textarea>
                                      <div className="d-flex justify-content-end text-dark h6">
                                        0/250 Characters left
                                      </div>
                                    </div>
                                    <div className="">
                                      <button
                                        type="submit"
                                        className="btn btn-primary col-md-12"
                                      >
                                        Send
                                      </button>
                                    </div>
                                  </div>
                                </form>

                                {/* Form End ^^^^ */}
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
          </div>

          <div className="container d-flex flex-row d-block d-sm-none my-5 py-5">
            <div className="card">
              <img
                src={InvestToCryptoGenieMobile}
                className="img-fluid card-img-top"
              />
              <div className="card-img-overlay card-inverse">
                <div className="text-white mt-5">
                  Invest your money to the CryptoGenie and earn more money
                  <div>
                    <button type="button" className="btn btn-primary mt-4">
                      Invest to CryptoGenie
                    </button>
                  </div>
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
                  <a
                    type="button"
                    className="col-10 col-sm-4 btn btn-primary rounded-0 p-3"
                    href="trendprediction1"
                  >
                    Go To Predictions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default LandingPage;