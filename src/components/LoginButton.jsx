import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import Avatar from "../assets/Header/Avatar.svg";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {!isAuthenticated && (
        <div class="row g-3 d-none d-lg-block d-lg-flex flex-lg-row">
          <div className="col-lg-6">
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              class="col-sm btn btn-outline-secondary"
            >
              SignUp
            </button>
          </div>
          <div className="col-lg-6">
            <button
              onClick={() => loginWithRedirect()}
              type="button"
              class="col-sm btn btn-outline-secondary"
            >
              SignIn
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

          <div class="dropdown ">
            <div
              class="btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
            ></div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Setting
                </a>
              </li>
              <li onClick={() => loginWithRedirect()}>
                <a class="dropdown-item" href="#">
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
