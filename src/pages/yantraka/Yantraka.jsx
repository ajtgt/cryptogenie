import React from "react";
import YantrakaHeaderLogo from "../../assets/YantrakaHeaderLogo.svg";
import YantrakaHeroBg from "../../assets/YantrakaHeroBg.svg";
import SolutionTripleArrow from "../../assets/SolutionTripleArrow.svg";
import SolutionBg from "../../assets/SolutionBg.svg";
import SolutionLogo from "../../assets/SolutionLogo.svg";
import SolutionLine from "../../assets/SolutionLine.svg";
import SolutionComingSoon from "../../assets/SolutionComingSoon.svg";
import SolutionInvest from "../../assets/SolutionInvest.svg";
import Union from "../../assets/Union.svg";
import YantrakaFooterLogo from "../../assets/YantrakaFooterLogo.svg";

const Yantraka = () => {
  return (
    <>
      {/* Header */}
      <div className="container-fluid g-0 bg-dark ps-3 py-4 pe-5">
        <div className="d-flex justify-content-between align-items-center ms-5">
          {/* LeftSide Header */}
          <div className="w-322 h-40">
            <img src={YantrakaHeaderLogo} />
          </div>
          {/* RightSide Header */}
          <div className="d-flex flex-row me-4 pe-3">
            <div className="text-white me-5 pe-3">
              <div class="dropdown">
                <div
                  type="button"
                  class=" dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Products
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
            <div className="text-white me-5 pe-3">Career</div>
            <div className="text-white  me-5 pe-3">News</div>
            <div className="text-white  ">Blog</div>
          </div>
        </div>
      </div>
      {/* Header  Code end ^^^^^^ */}
      {/* Hero Text */}
      <div className="container-fluid g-0 bg-dark pt-5 pb-5  d-flex justify-content-center align-items-center">
        <div className="text-white mb-3">
          <h1>
            Yantraka.ai designs and develops products
            <br />
            in Fintech, Energy and Retail domains
            <br />
            using advanced Artificial Intelligence &
            <br />
            Machine Learning.
          </h1>
        </div>
      </div>
      {/* Hero text End ^^^ */}
      {/* Hero BackGround */}
      <div className="container-fluid g-0 d-flex justify-content-center align-items-center bg-dark mb-5">
        <img className="w-75 h-75" src={YantrakaHeroBg}></img>
      </div>
      {/* Hero BackGround End ^^^^^^*/}
      {/* Solutions Background */}
      <div className="container-fluid g-0 py-5 mb-5">
        <div className="d-flex justify-content-center align-content-center">
          <div className="w-1088">
            <div className="mb-5">
              <img src={SolutionTripleArrow}></img>
            </div>
            <div>
              <img src={SolutionBg}></img>
            </div>
          </div>
        </div>
      </div>
      {/* Solutions Background  ^^^^^^^*/}
      {/* Solutuin Content */}
      <div className="container-fluid g-0 mb-5">
        <div className="d-flex justify-content-center align-content-center ">
          <div className="w-1088 d-flex justify-content-between">
            <div>
              <img className="w-56 h-56" src={SolutionLogo} />
            </div>
            <div className="w-864">
              <div className="mb-3">
                <h2>CryptoGenie</h2>
              </div>
              <div className="d-flex justify-content-between pb-3 mb-4">
                <div className="me-5">
                  An Automated Predictive Trading Platform for Cryptocurrencies,
                  Stocks and Forex using advanced financial machine learning
                  concepts and techniques at the cutting edge of technology from
                  state of the art research papers
                </div>
                <div className="ms-3">
                  CryptoGenie can be licensed to capital management firms which
                  can leverage the technolgoy to provide superior returns to
                  their fund investors. It is an automated system end to end,
                  right from data ingestion, to model training, validation and
                  trading.
                </div>
              </div>
              <div className="btn-purple w-192 h-56 d-flex justify-content-center align-items-center mb-5 ">
                <div className=" ">Go to CryptoGenie</div>
              </div>
              <img className=" my-3 py-4" src={SolutionLine} />
              {/* Solution Coming */}
              <div className="d-flex justify-content-between mt-5 ">
                <div className="w-416 ">
                  <img className="mb-4 pb-3" src={SolutionComingSoon} />
                  <h1 classaName="my-2">Coming Soon</h1>
                  <p className="mb-4 pb-2">
                    Our new product. Early education for productive work
                  </p>
                  <div className="btn-purple w-224 h-56 d-flex justify-content-center align-items-center">
                    <div className=" ">Request Demo</div>
                  </div>
                </div>
                <div className="position-relative w-416 h-517 ">
                  <div>
                    <img className="h-100 w-100" src={SolutionInvest} />
                  </div>
                  <div className="position-absolute bottom-0 my-5 py-3 mx-4 px-3 ">
                    <h2 className="text-white mb-4 pb-4">
                      Invest your money to
                      <br />
                      the CryptoGenie and
                      <br /> earn more money
                    </h2>
                    <div className="btn-purple w-224 h-56 d-flex justify-content-center align-items-center mt-2">
                      <div className=" ">Request Demo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 py-5"></div>

      {/* Footer */}
      <div className="container-fluid  mt-5 pt-5">
        <div className="row mx-5 px-3 navbar navbar-expand-sm g-0 ">
          <div className="col">
            <div className="d-flex w-132 h-32">
              <img src={YantrakaFooterLogo}></img>
            </div>
          </div>
          <div className="col d-flex justify-content-end ">
            <ul class="navbar-nav">
              <li class="nav-item pe-4 me-5">
                <a class="nav-link text-dark" href="#">
                  CryptoGenie
                </a>
              </li>
              <li class="nav-item ms-2 pe-4 me-5">
                <a class="nav-link text-dark" href="#">
                  Careers
                </a>
              </li>
              <li class="nav-item ms-2 pe-4 me-5">
                <a class="nav-link text-dark" href="#">
                  News
                </a>
              </li>
              <li class="nav-item  ms-2">
                <a class="nav-link text-dark" href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-3 mx-5">
          <hr></hr>
        </div>
        <div className="row px-3 mx-5 mb-4">
          <div className="col">@Yantraka.ai, 2022</div>
          <div className="col d-flex justify-content-end">
            <div className="me-5 pe-4">Terms of use</div>
            <div className="ms-3">Privacy Policy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Yantraka;
