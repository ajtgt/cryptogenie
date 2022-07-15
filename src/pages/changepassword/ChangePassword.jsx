import React from "react";

const ChangePassword = () => {
  return (
    <div
      className="container-fluid vh-100 d-flex justify-content-center align-items-center"
      style={{
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
            <b>Change Password</b>
          </div>
          <form>
            <div class="form-group">
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
                placeholder="Enter new password"
              ></input>
            </div>
            <div class="form-group">
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
                placeholder="Confirm new password"
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
                  color: "white",
                }}
              >
                Save
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
