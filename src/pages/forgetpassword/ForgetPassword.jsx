import React from "react";

const ForgetPassword = () => {
  return (
    <div
      className="container-fluid  d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: "#999999",
        padding: "50px",
        height: "100%",
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
            <b>Forget Password</b>
          </div>
          <div
            style={{ width: "448px", height: "168px", marginBottom: "24px" }}
          >
            Make sure to enter the email address associated with your
            <br />
            account. We will use it to send instructions for resetting your
            <br /> password.
            <br />
            <br /> Please mind that your password is not stored anywhere
            <br /> for security purposes. That means we cannot send
            <br /> it to you via email.
          </div>
          <form>
            <div class="form-group">
              <label
                id="email"
                for="email"
                class="form-label "
                style={{ fontSize: "12px", color: "#757883" }}
              >
                Email
              </label>
              <input
                type="email"
                class="form-control"
                style={{
                  height: "56px",
                  width: "448px",
                  marginBottom: "16px",
                  fontSize: "14px",
                }}
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              ></input>
            </div>
            <div className="d-flex flex-column">
              <div
                type="btn"
                className="btn d-flex justify-content-center align-items-center"
                style={{
                  height: "56px",
                  width: "448px",
                  marginBottom: "24px",
                  fontSize: "16px",
                  backgroundColor: "#6237de",
                  color: "#fffff",
                }}
              >
                Send
              </div>
              <div
                type="btn"
                className="btn d-flex justify-content-center align-items-center"
                style={{
                  height: "56px",
                  width: "448px",
                  marginBottom: "20px",
                  fontSize: "16px",
                }}
              >
                Sign In
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
