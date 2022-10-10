import React from "react";
import Logo from "../assets/Header/Logo.svg";

const Footer = () => {
  return (
    <div className="container">
      <div className="left-menu d-flex d-sm-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
        <div className="d-flex  justify-content-center">
          <img src={Logo} className="img-fluid" />
        </div>
        <div className="right-menu d-flex d-sm-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
          <div className="p-2 d-flex  justify-content-center">Home</div>
          <div className="p-2 d-flex  justify-content-center">Features</div>
          <div className="p-2 d-flex  justify-content-center">Pricing</div>
          <div className="p-2 d-flex  justify-content-center">FAQ</div>
        </div>
      </div>
      <hr></hr>
      <div className="d-flex d-sm-flex flex-column flex-sm-row justify-content-center justify-content-sm-between">
        <div className="left-menu d-flex  justify-content-center ">
          @Yantraka.ai, 2022
        </div>
        <div className="right-menu d-flex d-sm-flex flex-column flex-sm-row justify-content-center justify-content-sm-between ">
          <div className="p-2 mx-4 d-flex  justify-content-center ">
            Terms of use
          </div>
          <div className="p-2 mx-4 d-flex  justify-content-center ">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
