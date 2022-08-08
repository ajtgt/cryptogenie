import React from "react";
import PricingCard1 from "../assets/LandingPage/PricingCard1.svg";
import Tick from "../assets/LandingPage/Tick.svg";
import BlackLine from "../assets/LandingPage/BlackLine.svg";

const PricingCards = () => {
  return (
    <div>
      <div className="border pt-3 px-3 pb-4">
        <div className="mb-4">
          <img src={BlackLine} className="w-100" />
        </div>
        <div className="d-flex justify-content-center align-items-center mb-3">
          <div className="h3">Free</div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <div>Lorem ipsum dolor sit amet, </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mb-5">
          <img src={PricingCard1} />
        </div>

        <div className="mb-5 d-flex flex-column justify-content-center align-items-center">
          <div className="d-flex">
            <div>
              <img src={Tick} width="24px" height="24px" />
            </div>
            <div>
              <div>BTCUSDT </div>
              <div>Charts & current predictions</div>
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img src={Tick} width="24px" height="24px" />
            </div>
            <div>
              <div>BTCUSDT </div>
              <div>Charts & current predictions</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-primary w-75">
            Start Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
