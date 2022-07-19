import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import TrendCards from "../../components/TrendCards";

const UpgradePlan = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid g-0 ">
        {/* Header */}
        <div className="d-flex justify-content-between py-4 px-5  ">
          <div>
            <h1>Trend Predictions</h1>
          </div>
          {/* Dropdown */}
          <div class="dropdown d-flex  align-items-center">
            <div
              type="button"
              class="dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Sort by:<b>Tether</b>
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
        <TrendCards />
        <TrendCards />
      </div>

      <Footer />
    </div>
  );
};

export default UpgradePlan;
