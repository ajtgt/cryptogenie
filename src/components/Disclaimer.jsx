import React from "react";
import DisclaimerTag from "../assets/CryptoProfilePage/DisclaimerTag.svg";
import DisclaimerSubtract from "../assets/CryptoProfilePage/DisclaimerSubtract.svg";

const Disclaimer = () => {
  return (
    <div>
      <div className="container my-5 ">
        {/* <div className=" mb-5">
          <img
            src={DisclaimerSubtract}
            className="img-fluid"
            height="75px"
            width="150px,"
          />
        </div> */}
        <div className=" border border-secondary border-2 ">
          <div className="row p-3 ">
            <div className="col-lg-1 col-sm-6 d-flex justify-content-center align-items-center">
              <img
                src={DisclaimerTag}
                className="img-fluid "
                height="70px"
                width="70px"
              />
            </div>
            <div className="col-lg-11 col-sm-6">
              <b>
                This Site and the content therein is for information purposes
                only and is not intended to and does not provide tax, legal,
                insurance or investment advice, and nothing on the Site should
                be construed as an offer to sell, a solicitation of an offer to
                buy, or a recommendation for any security by Yantraka or any
                third party. You should consult an attorney or tax professional
                regarding your specific legal or tax situation. In no event
                shall Yantraka be liable for any damages, costs, expenses, legal
                fees, or losses (including lost income or lost profit and
                opportunity costs) in connection with any use of the Site and
                the content therein. A reference to a particular investment or
                security, a rating or any observation concerning an investment
                that is part of the Site is not a recommendation to buy, sell or
                hold such investment or security, does not address the
                suitability of an investment or security and should not be
                relied on as investment advice.
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
