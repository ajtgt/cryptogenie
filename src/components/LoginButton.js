import React from "react";
import { useAuth0 } from "@auth0/auth0-react";



import Avatar from "../assets/Header/Avatar.svg";

const LoginButton = () => {
  function changeBackground1(e) {
    e.target.style.background = "#6237de";
    e.target.style.color = "white";
  }
  function changeBackground2(e) {
    e.target.style.background = "white";
    e.target.style.color = "black";
  }
    const { loginWithRedirect, isAuthenticated } = useAuth0();


  return (
    <>
      {!isAuthenticated && (
        <div className="row g-3 d-none d-lg-block d-lg-flex flex-lg-row">
          <div className="col-lg-6">
            <a
              
              style={{ fontFamily: "Satoshi", outline: "none" }}
              className="col-sm text-primary btn btn-link text-decoration-none text-dark border-0 rounded-0"
              href="https://main.d1r3myfmqkkt4h.amplifyapp.com/signup"

              
            >
              Sign&nbsp;up
            </a>
          </div>
          <div className="col-lg-6">
            <button
              onMouseOver={changeBackground1}
              onMouseLeave={changeBackground2}
              onClick={() => loginWithRedirect()}
              style={{ fontFamily: "Satoshi" }}
              type="button"
              className="col-sm border-light btn  btn-outline   rounded-0 px-4 border-2 "
            >
              Sign&nbsp;in
            </button>
          </div>
        </div>
      )}

      {/* Mobile View */}
      {!isAuthenticated && (
        <div className=" d-flex justify-content-end d-block d-sm-block d-lg-none">
          <div>
            <img src={Avatar} alt="Avatar" className="img-fluid"></img>
          </div>

          <div className="dropdown ">
            <div
              className="btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
            ></div>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Setting
                </a>
              </li>
              <li
                onClick={() => {
                  loginWithRedirect();
                }}
              >
                <a className="dropdown-item" href="#">
                  LogIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
