import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      {!isAuthenticated && (
        <div
          className="col d-flex justify-content-end"
          style={{ marginRight: "79px" }}
        >
          <div
            type="button"
            className="border px-3 py-1 me-3"
            onClick={() => loginWithRedirect()}
          >
            <b>SignIn</b>
          </div>

          <div type="button" class="border px-3 py-1">
            <b>SignUp</b>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
