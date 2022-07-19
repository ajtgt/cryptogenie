import React from "react";

const Signin = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        height: "100%",
        backgroundColor: "#999999",
        padding: "50px",
      }}
    >
      <div className="card">
        <div className="container" style={{ padding: "48px 72px" }}>
          <div
            type="button"
            className="close d-flex justify-content-end"
            style={{ fontSize: "18px" }}
          >
            <span aria-hidden="true">&times;</span>
          </div>
          <div className="h2" style={{ marginBottom: "24px" }}>
            Sign In
          </div>

          <form>
            <div class="form-group">
              <label
                id="email"
                for="email"
                class="form-label collapse"
                style={{ fontSize: "12px", color: "#757883" }}
              >
                Email
              </label>
              <input
                type="email"
                class="form-control"
                style={{ height: "56px", width: "448px", marginBottom: "16px" }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              ></input>
            </div>
            <div class="form-group">
              <label
                id="password"
                for="pwd"
                class="form-label collapse"
                style={{ fontSize: "12px", color: "#757883" }}
              >
                Password
              </label>
              <input
                type="password"
                class="form-control"
                style={{ height: "56px", width: "448px", marginBottom: "16px" }}
                id="exampleInputPassword1"
                placeholder="Password"
              ></input>
            </div>
            {/* 

            Tick Input 

            */}
            <div
              class="row d-flex flex-row form-group form-check"
              style={{ marginBottom: "40px" }}
            >
              <div className="col d-flex justify-content-start">
                <input
                  type="checkbox"
                  data-bs-toggle="collapse"
                  data-bs-target="#email, #password"
                  class="form-check-input"
                  id="exampleCheck1"
                  style={{
                    marginRight: "11px",
                  }}
                ></input>
                <label
                  class="form-check-label"
                  for="exampleCheck1"
                  style={{ fontSize: "14px", color: "#000000" }}
                >
                  Remember me
                </label>
              </div>
              <div className="col d-flex justify-content-end">
                <label
                  class="form-check-label text-primary"
                  style={{ fontSize: "14px", color: "#6B38FD" }}
                >
                  Forget password?
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="btn "
              style={{
                height: "56px",
                width: "448px",
                marginBottom: "52px",
                backgroundColor: "#6237de",
                color: "#ffffff",
                fontSize: "16px",
              }}
            >
              Sign In
            </button>

            <div className="row d-flex" style={{ marginBottom: "52px" }}>
              <div className="col-5 ">
                <hr></hr>
              </div>
              <div
                className="col-2 d-flex justify-content-center "
                style={{ fontSize: "14px" }}
              >
                <p>OR</p>
              </div>
              <div className="col-5 ">
                <hr></hr>
              </div>
            </div>
            <div
              className="row d-flex flex-row "
              style={{
                height: "56px",
                width: "448px",
                marginBottom: "40px",
                marginLeft: "0px",
                fontSize: "16px",
              }}
            >
              <div
                className="col d-flex align-items-center border"
                type="submit"
              >
                <img
                  alt="Google"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/Google.svg"
                />
                &nbsp; Sign in with Google
              </div>

              <div
                className="col d-flex align-items-center border"
                type="submit"
                style={{ marginLeft: "25px" }}
              >
                <img
                  alt="Linkedln"
                  src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/linkedin.svg"
                />
                &nbsp; Sign in with Linkedin
              </div>
            </div>
            <div className="row ">
              <div
                className="col d-flex justify-content-center"
                style={{ fontSize: "16px" }}
              >
                Don't have an account? &nbsp; &nbsp;
                <a
                  href="#"
                  style={{ textDecoration: "none", color: "#6237DE" }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
