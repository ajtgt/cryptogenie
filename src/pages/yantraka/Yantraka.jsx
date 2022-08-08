import React from "react";
import YantrakaHeaderAi from "../../components/YantrakaHeaderAi";
import YantrakaFooter from "../../components/YantrakaFooter";
import YantrakaGlobe from "../../assets/Yantraka/YantrakaGlobe.svg";

import YantrakaSolution from "../../assets/Yantraka/YantrakaSolution.svg";
import SolutionBg from "../../assets/Yantraka/SolutionBg.svg";

import MPCover from "../../assets/MainPage/MPCover.svg";
import MPTrendBg from "../../assets/MainPage/MPTrendBg.svg";
import MPTrendBgMobile from "../../assets/Yantraka/MPTrendBgMobile.svg";
import MPLogo from "../../assets/MainPage/MPLogo.svg";
import MPLine from "../../assets/MainPage/MPLine.svg";
import MPSquare from "../../assets/MainPage/MPSquare.svg";

const Yantraka = () => {
  return (
    <div>
      <YantrakaHeaderAi />
      <div className="bg-dark">
        <div className="container position-relative pt-5">
          <div className="position-relative text-white ">
            <div className="h1 d-flex justify-content-center ">
              <div className=" mb-5">
                Yantraka.ai designs and develops products in Fintech, Energy and
                Retail domains using advanced Artificial Intelligence & Machine
                Learning.
              </div>
            </div>
            <img src={YantrakaGlobe} className="w-100 img-fluid" />
          </div>
        </div>

        {/* Solution */}
        <div className="bg-white">
          <div className="container my-5 py-5 ">
            <div className="mb-5">
              <img src={YantrakaSolution} width="167px" height="32px" />
            </div>
            <div className="mb-5">
              <img src={SolutionBg} className="img-fluid" />
            </div>
            <div className="row">
              <div className="col-sm-2 d-none d-sm-block ">
                <img src={MPLogo} className="img-fluid" />
              </div>
              <div className="col-sm-10">
                <div className="row m-3">
                  <div className="col-sm-6 col-12 ">
                    <div className="h2 mb-3">CryptoGenie</div>
                    <div className="mb-5">
                      An Automated Predictive Trading Platform for
                      Cryptocurrencies, using advanced financial machine
                      learning concepts and techniques at the cutting edge of
                      technology from state of the art research papers
                    </div>
                    <div>
                      <button
                        type="button"
                        class="col-12 col-sm-6 btn btn-primary"
                      >
                        Go to CryptoGenie
                      </button>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12  mt-5">
                    CryptoGenie can be licensed to capital management firms
                    which can leverage the technolgoy to provide superior
                    returns to their fund investors. It is an automated system
                    end to end, right from data ingestion, to model training,
                    validation and trading.
                  </div>
                </div>
                {/* Arrow Line Start */}
                <div className="d-flex w-100">
                  <img src={MPLine} className="img-fluid my-5 py-5" />
                </div>

                {/* Arrow Line End */}

                {/* Coming Soon START */}
                <div className="row">
                  <div className="col-sm-6">
                    <img src={MPSquare} className="img-fluid mb-5 pb-5" />
                    <div className="mb-2 h2">Coming Soon</div>
                    <div className="mb-5">
                      Our new product. Early education for productive work
                    </div>
                    <div className="row d-flex justify-content-center d-sm-flex justify-content-sm-start mb-4">
                      <div className="">
                        <button
                          type="button"
                          className="col-12 col-sm-6 btn btn-primary "
                        >
                          Request Demo
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Go to CryptoGenie Start */}
                  <div className="card col-sm-6 d-none d-sm-block border-0">
                    <img src={MPTrendBg} className="img-fluid" />
                    <div class="card-img-overlay card-inverse px-5 pt-5 mt-5">
                      <h1 calssName="text-white ">
                        Trade more effectively with our Cryptocurrencies trend
                        predictions.
                      </h1>
                      <div className="row d-flex justify-content-center d-sm-flex justify-content-sm-start mb-4">
                        <div className="">
                          <button
                            type="button"
                            className=" col-sm-6 btn btn-primary mt-5"
                          >
                            Request Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Go to CryptoGenie End */}
                  {/* Go to CryptoGenie Mobile View  Start */}
                  <div className="card col-sm-6 d-block d-sm-none ">
                    <img src={MPTrendBgMobile} className="img-fluid" />
                    <div class="card-img-overlay card-inverse  px-4 py-3">
                      <h1 calssName="text-white">
                        Trade more effectively with our Cryptocurrencies trend
                        predictions.
                      </h1>
                      <div className="row d-flex justify-content-center">
                        <div className="mt-3">
                          <button
                            type="button"
                            className="col-12 btn btn-primary"
                          >
                            Request Demo
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Go to CryptoGenie Mobile View  End */}
                </div>

                {/* Coming Soon  END*/}
              </div>
            </div>
          </div>
        </div>
      </div>
      <YantrakaFooter />
    </div>
  );
};

export default Yantraka;
