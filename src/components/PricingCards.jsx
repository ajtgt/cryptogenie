import React from "react";
import PricingCard1 from "../assets/LandingPage/PricingCard1.svg";
import Tick from "../assets/LandingPage/Tick.svg";
import BlackLine from "../assets/LandingPage/BlackLine.svg";

const PricingCards = ({ data }) => {
  return (
    <div>
      <div className="row d-sm-flex d-lg-flex flex-lg-row flex-sm-row d-none d-sm-block g-3">
        {data?.map((e) => {
          return (
            <div className=" col-sm-6 col-md-3">
              <div className="card  h-100">
                <div className="d-sm-flex flex-sm-column pt-3 px-3 pb-4 h-100  justify-content-sm-between">
                  <div className="mb-4">
                    <img src={BlackLine} className="w-100" />
                  </div>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="h3">{e.monthly}</div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mb-5">
                    <div>{e.yearly}</div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center mb-5">
                    <img src={PricingCard1} />
                  </div>
                  {e?.features.map((f) => {
                    console.log(f);
                    return (
                      <div className="d-flex flex-column  align-items-start mb-1 ">
                        <div className="d-lg-flex justify-content-lg-start">
                          <div className=" me-3">
                            <img src={Tick} width="24px" height="24px" />
                          </div>
                          <div>
                            <div>{f}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div className="d-lg-flex  justify-content-lg-center  mt-auto">
                    <button type="button" class="btn btn-primary w-75">
                      Start Free Trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCards;
