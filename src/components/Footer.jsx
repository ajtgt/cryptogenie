import React from "react";
import Union from "../assets/Union.svg";

const Footer = () => {
  return (
    <div className="container-fluid" style={{ marginTop: "72px" }}>
      <div
        className="row navbar navbar-expand-sm g-0 "
        style={{
          paddingLeft: "64px",
          paddingRight: "64px",
        }}
      >
        <div className="col">
          <div className="d-flex">
            <img src={Union} style={{ width: "24px", height: "24px" }}></img>
            <h5>
              <b>&nbsp;CryptoGenie</b>
            </h5>
          </div>
        </div>
        <div className="col d-flex justify-content-end ">
          <ul class="navbar-nav">
            <li class="nav-item" style={{ marginLeft: "80px" }}>
              <a class="nav-link text-dark" href="#">
                Feature
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "80px" }}>
              <a class="nav-link text-dark" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "80px" }}>
              <a class="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li class="nav-item" style={{ marginLeft: "80px" }}>
              <a class="nav-link text-dark" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ paddingLeft: "64px", paddingRight: "64px" }}>
        <hr></hr>
      </div>
      <div
        className="row"
        style={{
          paddingLeft: "64px",
          paddingRight: "64px",
          marginBottom: "24px",
        }}
      >
        <div className="col">@Yantraka.ai, 2022</div>
        <div className="col d-flex flex-row justify-content-end">
          <div>Terms of use</div>
          <div style={{ marginLeft: "80px" }}>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
