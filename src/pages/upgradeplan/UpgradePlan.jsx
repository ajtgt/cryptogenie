import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoinInfoBlock from "../../components/CoinInfoBlock";

const UpGradePlan = () => {
  return (
    <div>
      <Header />
      <div className="container d-flex justify-content-between  my-4 ">
        <div className="h3">Trend Prediction</div>
        <div className="">
          <div class="dropdown">
            <div
              class=" dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Sort by : Tether
            </div>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <CoinInfoBlock />
      </div>
      <div className="mb-5">
        <CoinInfoBlock />
      </div>

      <Footer />
    </div>
  );
};

export default UpGradePlan;
