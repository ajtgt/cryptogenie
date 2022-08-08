import React from "react";
import Avatar from "../assets/Header/Avatar.svg";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
        <div className="col d-flex justify-content-end">
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
              <li onClick={() => logout()}>
                <a class="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutButton;
