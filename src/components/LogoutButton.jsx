import React from "react";
import Avatar from "../assets/Header/Avatar.svg";
import Setting from "../assets/Header/Setting.svg";
import Logout from "../assets/Header/Logout.svg";
import { useAuth0 } from "@auth0/auth0-react";

import { useDispatch } from "react-redux";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  return (
    <>
      {isAuthenticated && (
        <div className="col d-flex justify-content-end">
          <div class="dropdown dropstart">
            {/* <div
              class="btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
            ></div> */}
            <div
              classsName="cursor-pointer btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
              role="button"
            >
              <img src={Avatar} alt="Avatar" classsName="img-fluid"></img>
            </div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="settingpage">
                  <img
                    src={Setting}
                    className="img-fuid me-3"
                    height="25px"
                    width="25px"
                  />
                  Setting
                </a>
              </li>
              <li onClick={() => logout()}>
                <a class="dropdown-item" href="">
                  <img
                    src={Logout}
                    className="img-fuid me-3"
                    height="25px"
                    width="25px"
                  />
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
