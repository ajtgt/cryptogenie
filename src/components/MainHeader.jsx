import React from "react";
import Union from "../assets/Union.svg";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

const MainHeader = () => {
  return (
    <div className="conatiner-fluid ">
      <div
        className="row navbar navbar-expand-sm border-bottom g-0"
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
      >
        <div className="col" style={{ marginLeft: "72px" }}>
          <div className="d-flex">
            <img src={Union} style={{ width: "24px", height: "24px" }}></img>
            <h5>
              <b>&nbsp;CryptoGenie</b>
            </h5>
          </div>
        </div>
        <div className="col ">
          <ul class="navbar-nav " style={{ fontSize: "16px" }}>
            <li class="nav-item " style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Home
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Feature
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        {/* LogIn Button */}
        <LoginButton />
        <LogoutButton />
      </div>
    </div>
  );
};

export default MainHeader;
