import React from "react";

const SignIn = () => {
  return (
    <>
      {/* Desktop View  */}
      <div className=" row d-md-flex bg-secondary h-100 w-100 justify-content-md-center p-5 d-none d-md-block">
        <div className="card col-md-6 py-3 px-5 ">
          {/* Close Button */}
          <div
            type="button"
            className="close btn-lg d-sm-flex justify-content-sm-end"
          >
            <span aria-hidden="true">&times;</span>
          </div>
          {/* Form Start */}
          <div className="h1 mb-4">SignIn</div>
          <div class="row">
            <label for="email">Email</label>
            <div class="col-md-12 mb-3">
              <input
                type="email"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
              ></input>
            </div>
            <div class="col-md-12 mb-3">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                aria-label="Password"
              ></input>
            </div>
            <div class="d-sm-flex justify-content-between ">
              <div class="form-check mb-5">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <div>Forgot password?</div>
            </div>
            <div className="col-sm-12 mb-5">
              <button type="submit" class="col-sm-12 col-12 btn btn-primary ">
                Sign In
              </button>
            </div>
            {/* OR LINE */}
            <div class="row mb-5">
              <div class="col-sm">
                <hr></hr>
              </div>
              <div class="col-auto">OR</div>
              <div class="col-sm">
                <hr></hr>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col">
              <button
                type="submit"
                class="btn btn btn-outline-secondary  w-100"
              >
                <img
                  alt="Google"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/Google.svg"
                />
                &nbsp; Sign in with Google
              </button>
            </div>
            <div class="col">
              <button
                type="submit"
                class="btn btn btn-outline-secondary  w-100"
              >
                <img
                  alt="Google"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/linkedin.svg"
                />
                &nbsp; Sign in with Linkedin
              </button>
            </div>
          </div>
          <div className="d-sm-flex justify-content-center mb-5">
            Don't have an account?Sign Up
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="d-block d-md-none">
        <div className="row py-4 px-3">
          {/* Title */}
          <div className="d-flex d-sm-flex justify-content-between justify-content-sm-between mb-4">
            <div className="h3">Sign In</div>
            <div className="">
              <div
                type="button"
                className="close btn-lg d-sm-flex justify-content-sm-end"
              >
                <span aria-hidden="true">&times;</span>
              </div>
            </div>
          </div>

          <form class="row g-3">
            <div class="col-12">
              <label for="Email" class="form-label">
                Email
              </label>
              <input
                type="text"
                class="form-control"
                placeholder="Email"
              ></input>
            </div>
            <div class="col-12">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              ></input>
            </div>

            <div class="col-6">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                ></input>
                <label class="form-check-label" for="gridCheck">
                  Remember
                </label>
              </div>
            </div>
            <div class="col-6 d-flex justify-content-end">Forget Password</div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
