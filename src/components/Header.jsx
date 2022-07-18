import React from "react";
import Union from "../assets/Union.svg";
import Avatar from "../assets/Avatar.svg";

const Header = () => {
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
        <div
          className="col d-flex justify-content-end"
          style={{ marginRight: "79px" }}
        >
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "24px", height: "24px" }}
            ></img>
          </div>

          {/* <img alt="Avatar" style={{ width: "24px", height: "24px" }}></img> */}
          <div class="dropdown ">
            <div class="btn dropdown-toggle" data-bs-toggle="dropdown"></div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  MyProfile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Setting
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
