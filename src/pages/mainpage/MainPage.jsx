import React from "react";
import YantrakaHeader from "../../components/YantrakaHeader";
import YantrakaFooter from "../../components/YantrakaFooter";

import YantrakaBg from "../../assets/MainPage/YantrakaBg.svg";
import MPTitle from "../../assets/MainPage/MPTitle.svg";
import MPCover from "../../assets/MainPage/MPCover.svg";
import MPTrendBg from "../../assets/MainPage/MPTrendBg.svg";
import MPLogo from "../../assets/MainPage/MPLogo.svg";
import MPLine from "../../assets/MainPage/MPLine.svg";
import MPSquare from "../../assets/MainPage/MPSquare.svg";

const MainPage = () => {
  return (
    <div>
      <YantrakaHeader />
      <div className="position-relative mb-5">
        <img src={YantrakaBg} className="w-100 h-100" />
        {/* <div classname="position-relative">
          Yantraka.ai designs and develops products in Fintech, Energy and
          Retail domains using advanced Artificial Intelligence & Machine
          Learning.
        </div> */}
      </div>
      <div className="container my-5 py-5">
        <div className="mb-5">
          <img src={MPTitle} width="167px" height="32px" />
        </div>
        <div className="mb-5">
          <img src={MPCover} className="w-100 h-100" />
        </div>
        <div className="row">
          <div className="col-lg-2">
            <img src={MPLogo} />
          </div>
          <div className="col-lg-10">
            <div className="row">
              <div className="col-lg-5 w-50">
                <div className="h2 mb-3">CryptoGenie</div>
                <div className="mb-5">
                  An Automated Predictive Trading Platform for Cryptocurrencies,
                  using advanced financial machine learning concepts and
                  techniques at the cutting edge of technology from state of the
                  art research papers
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
                    Go to CryptoGenie
                  </button>
                </div>
              </div>
              <div className="col-lg-5 mt-5">
                CryptoGenie can be licensed to capital management firms which
                can leverage the technolgoy to provide superior returns to their
                fund investors. It is an automated system end to end, right from
                data ingestion, to model training, validation and trading.
              </div>
            </div>
            <div>
              <img src={MPLine} className="w-100 my-5 py-5" />
            </div>
            <div className="row w-100 ">
              <div className="col-lg-5 w-50 h-50 ">
                <img src={MPSquare} className="w-100 h-100 mb-5 pb-5" />
                <div className="mb-2 h2">Coming Soon</div>
                <div className="mb-5">
                  Our new product. Early education for productive work
                </div>
                <button type="button" className="btn btn-primary w-50 h-100">
                  Request Demo
                </button>
              </div>
              <div className="col-lg-5 w-50 p-0">
                <img src={MPTrendBg} className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <YantrakaFooter />
    </div>
  );
};

export default MainPage;
