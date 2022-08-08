import React from "react";
import YantrakaLogo from "../assets/Header/YantrakaLogo.svg";

const YantrakaHeader = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container d-flex justify-content-between">
        <a class="navbar-brand" href="#">
          <img src={YantrakaLogo}></img>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav  me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Products
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Careers
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                News
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default YantrakaHeader;
