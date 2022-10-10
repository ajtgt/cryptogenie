import React from "react";
import SignUpBanner from "../../assets/SignUp/SignUpBanner.svg";

const SignUp = () => {
  return (
    <div className="row">
      <div className="col-sm-6 d-none d-sm-block">
        <img src={SignUpBanner} className="img-fluid" />
      </div>

      <div className="col-12 col-sm-6 p-5">
        <div className="h2 mb-5">Sign Up</div>
        <form>
          <div className="row d-sm-flex flex-sm-row g-3 m-0 mb-5">
            <button
              type="submit"
              class="col-sm-12 col-md-6 col-12 btn btn-outline-light text-dark"
            >
              <img
                alt="Google"
                src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/Google.svg"
              />
              &nbsp; Sign in with Google
            </button>
            <button
              type="submit"
              class="col-sm-12 col-md-6 col-12 btn btn-outline-light text-dark"
            >
              <img
                alt="Google"
                src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/linkedin.svg"
              />
              &nbsp; Sign in with Linkedin
            </button>
          </div>

          <div class="row mb-3">
            <div class="col">
              <hr></hr>
            </div>
            <div class="col-auto">OR</div>
            <div class="col">
              <hr></hr>
            </div>
          </div>
          {/* OR Line   End */}

          {/* Form Start */}
          <div class="form-group mb-3">
            <div className="row d-sm-flex flex-sm-row">
              <div class="col-sm-12 col-md-6 col-12 ">
                <label for="exampleFirstName">First Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="First Name"
                />
              </div>
              <div class="col-sm-12 col-12 col-md-6 ">
                <label for="exampleLastName">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>
          <div class="form-group mb-3">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Password"
            />
          </div>
          <div class="form-group mb-3">
            <label for="exampleConfirmPassword">Confirm Your Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleConfirmPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check mb-5">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              By accepting your agree to Yantraka.AI's Terms of Use & Privacy
              Policy
            </label>
          </div>
          <button type="submit" class="col-sm-12 col-12 btn btn-primary mb-3">
            Create account
          </button>
        </form>
        <div className="d-flex d-sm-flex justify-content-center justify-content-sm-center">
          Already a user? <a>Sign In</a>
        </div>
      </div>
      {/* Typo Form Start */}
    </div>
  );
};

export default SignUp;
