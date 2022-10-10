import { React, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/Header/Logo.svg";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useLocation } from "react-router-dom";



import { useDispatch } from "react-redux";
import { login } from "../features/user/userSlice";

const Header = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const dispatch = useDispatch();

  const location = useLocation();


  isAuthenticated &&
    getIdTokenClaims()
      .then((claims) => {
        dispatch(login(claims));
      })
      .catch((err) => {
        console.debug("Something went wrong", err);
      });

  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom bg-white sticky-top">
        {/* Desktop View  */}
        <div className="container my-1 py-3 d-none d-lg-block d-lg-flex">
          <div>
            <a className="navbar-brand" href="/home">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul
              id="navList"
              // onClick={myFunction}
              className="navbar-nav  mb-2 mb-lg-0 d-md-flex flex-row mx-md-auto "
            >
              {/* <Link to="/" className="nav-item  me-5 text-decoration-none"> */}
              <a
                className="nav-link active fs-6  me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home"
              >
                Home
              </a>
              {/* </Link> */}

              <a
                className="nav-link fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home#features"
              >
                Features
              </a>
              
              <a
                className="nav-link fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home#pricing"
              >
                Pricing
              </a>
             
              <a
                className="nav-link  fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                href="/trendprediction1"
              >
                Prediction
              </a>
              
            </ul>
          </div>
          <div className="d-flex">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        {/* Mobile View */}
        <div className="container py-3 d-lg-none d-lg-flex sticky-top">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <a className="navbar-brand" href="#">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>
          <div className="d-flex flex-row d-sm-flex flex-sm-row">
            <LoginButton />
            <LogoutButton />
          </div>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#prediction"
                >
                  Prediction
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
