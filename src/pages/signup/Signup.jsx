import React from "react";
import Banner from "../../assets/Banner.svg";

const Signup = () => (
  <div>
    <div className="conatiner-fluid d-flex flex-row g-0 ">
      {/* Banner */}
      <div ClassName="w-640 h-900">
        <img src={Banner}></img>
      </div>
      {/* Form */}
      <div ClassName="g-0 d-flex flex-row justify-content-center h-900">
        <div className="mt-5 ms-5 ps-5">
          <div className="w-480 ps-3">
            <div ClassName=" ">
              <h2 className="mb-5 pb-1">
                <b className="">Sign Up</b>
              </h2>
            </div>
            {/* Google And LinkedIn SignUp Start */}
            <div className="row d-flex flex-row h-56 g-0 mb-5 pb-1 ">
              <div
                className="col d-flex justify-content-center align-items-center border "
                type="submit"
              >
                <img
                  alt="Google"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/Google.svg"
                />
                &nbsp; Sign in with Google
              </div>

              <div
                className="col d-flex ms-4 justify-content-center align-items-center border"
                type="submit"
              >
                <img
                  alt="Linkedln"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/linkedin.svg"
                />
                &nbsp; Sign in with Linkedin
              </div>
            </div>
            {/* Google And LinkedIn SignUp Start */}
            {/* Horizontal Line */}
            <div className="mb-5 pb-1">
              <hr></hr>
            </div>

            {/* Name Input */}
            <div className="d-flex justify-content-center align-items-center mb-3 ">
              {/* First Name */}
              <div className="h-56 w-50 me-4">
                <input
                  type="text"
                  className="form-control h-100 w-100"
                  id="firstname"
                  placeholder="First Name"
                ></input>
              </div>
              {/* Last Name */}
              <div className="h-56 w-50">
                <input
                  type="text"
                  class="form-control h-100"
                  id="firstname"
                  placeholder="Last Name"
                ></input>
              </div>
            </div>
            {/* Email */}
            <div className="h-56 w-45 mb-3">
              <input
                type="email"
                class="form-control h-100"
                id="email"
                placeholder="Your email address"
              ></input>
            </div>
            {/* New Password */}
            <div className="h-56 w-100 mb-3">
              <input
                type="text"
                class="form-control h-100"
                id="createpassword"
                placeholder="Create password"
              ></input>
            </div>
            {/* Confirm password */}
            <div className="h-56 w-100 mb-3">
              <input
                type="text"
                class="form-control h-100"
                id="confirmyourpassword"
                placeholder="Confirm your password"
              ></input>
            </div>
            <div className="d-flex flex-row justify-content-center align-items-start mb-5 pb-2">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-1"
                  id="exampleCheck1"
                  style={{
                    marginRight: "11px",
                  }}
                ></input>
              </div>

              <div ClassName="ms-2">
                <h7>
                  By accepting your agree to Yantraka.AI's Terms of Use &
                  Privacy Policy
                </h7>
              </div>
            </div>
            {/* Button */}
            <div className="h-56 w-100 btn-purple ">
              <button type="submit" class="btn h-100 w-100 text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Signup;
