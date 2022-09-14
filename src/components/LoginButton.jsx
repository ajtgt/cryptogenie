import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { login } from "../features/user/userSlice";

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
  // function changeText1(p) {
  //   p.target.style.color = "#6237de";
  // }
  // function changeText2(p) {
  //   p.target.style.color = "black";
  // }

  // const onMouseOut = (event) => {
  //   const el = event.target;
  //   let black = "#7AF377";
  //   el.style.color = black;
  // };
  // const onMouseOver = (event) => {
  //   const el = event.target;
  //   let black = "#4AA086";
  //   el.style.color = black;
  // };

  // var isSignup = config.extraParams && config.extraParams.action === "signup";

  // var lock = new Auth0Lock(config.clientID, config.auth0Domain, {});
  // initialScreen: isSignup ? "signUp" : "login";
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  // const [color, setColor] = useState("");
  // const styles = {
  //   color: color,
  // };
  return (
    <>
      {!isAuthenticated && (
        <div className="row g-3 d-none d-lg-block d-lg-flex flex-lg-row">
          <div className="col-lg-6">
            <a
              // onMouseOver={{style ={{color:"white"}}}}
              // type="button"
              style={{ fontFamily: "Satoshi", outline: "none" }}
              className="col-sm text-primary btn btn-link text-decoration-none text-dark border-0 rounded-0"
              href="https://main.d1r3myfmqkkt4h.amplifyapp.com/signup"

              // style={({ fontFamily: "Satoshi" }, styles)}
              // onMouseEnter={() => setColor("green")}
              // onMouseLeave={() => setColor("")}
              // onMouseEnter={(this.style.color = "#6237de")}
              // onMouseLeave={(this.style.color = "black")}
              // onMouseOver={changeText1}
              // onMouseLeave={changeText2}
              // onMouseEnter={(event) => onMouseOver(event)}
              // onMouseOut={(event) => onMouseOut(event)}
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
            <img src={Avatar} alt="Avatar" classsName="img-fluid"></img>
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
