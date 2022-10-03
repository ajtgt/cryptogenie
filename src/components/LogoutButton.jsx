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
          <div className="dropdown drop">
            {/* <div
              className="btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
            ></div> */}
            <div
              className="cursor-pointer btn dropdown-toggle d-flex justify-content-center align-items-center"
              data-bs-toggle="dropdown"
              role="button"
            >
              <img src={Avatar} alt="Avatar" className="img-fluid"></img>
            </div>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="settingpage">
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
                <a className="dropdown-item" href="">
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
