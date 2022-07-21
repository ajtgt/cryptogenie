import React from "react";
import Avatar from "../assets/Avatar.svg";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <>
      {isAuthenticated && (
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

          <div class="dropdown ">
            <div
              class="btn dropdown-toggle d-flex justify-content-center"
              data-bs-toggle="dropdown"
            ></div>
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
