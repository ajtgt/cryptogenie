import React from "react";
import Union from "../../assets/Union.svg";
import Map from "../../assets/Map.svg";

const Contactus = () => {
  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center g-0 "
      style={{ height: "100%", backgroundColor: "#999999" }}
    >
      <div
        className="row bg-light g-0"
        style={{
          width: "1008px",
          height: "576px",
          marginTop: "162px",
          marginBottom: "162px",
        }}
      >
        <div
          className="col-3 g-0 d-flex justify-content-center align-items-center "
          style={{
            width: "416px",
            height: "100%",
            backgroundColor: "#F0F0F0",
          }}
        >
          <div
            style={{ width: "336px", height: "481px", marginBottom: "24px" }}
          >
            <div className="d-flex" style={{ marginBottom: "24px" }}>
              <img
                src={Union}
                style={{
                  width: "24px",
                  height: "24px",
                }}
              ></img>
              <h5>
                <b>&nbsp;CryptoGenie</b>
              </h5>
            </div>
            <div
              className="row d-flex g-0"
              style={{ width: "256px", height: "72px", marginBottom: "24px" }}
            >
              Get smarter about understanding crypto assets. Gain an edge over
              other investors.
            </div>
            <div
              className="row g-0"
              //   style={{ width: "100", height: "72px" }}
            >
              <img
                src={Map}
                style={{
                  fontFamily: "Inter, sans-serif",
                }}
              ></img>
            </div>
          </div>
        </div>

        <div
          className="col g-0 d-flex justify-content-center aligh-items-center "
          style={{ width: "592px" }}
        >
          <div className="row g-0 " style={{ width: "448px" }}>
            <div className="col g-0">
              <div
                type="button"
                className="close d-flex justify-content-end"
                style={{
                  marginTop: "27px",
                  fontSize: "20px",
                }}
              >
                <span aria-hidden="true">&times;</span>
              </div>
              <h2
                style={{
                  fontWeight: "700",
                  fontSize: "32px",
                  marginBottom: "40px",
                  marginTop: "21px",
                }}
              >
                Contact Us
              </h2>
              <form>
                <div
                  class="d-flex justify-content-between"
                  style={{ marginBottom: "16px" }}
                >
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="First name"
                    name="firstname"
                    style={{ width: "216px", height: "56px", fontSize: "14px" }}
                  ></input>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="Last name"
                    name="lastname"
                    style={{ width: "216px", height: "56px", fontSize: "14px" }}
                  ></input>
                </div>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  style={{
                    marginBottom: "16px",
                    width: "448px",
                    height: "56px",
                    fontSize: "14px",
                  }}
                ></input>
                <input
                  type="text"
                  class="form-control"
                  id="subject"
                  placeholder="Choose Subject"
                  name="subject"
                  style={{
                    marginBottom: "16px",
                    width: "448px",
                    height: "56px",
                    fontSize: "14px",
                  }}
                ></input>
                <textarea
                  class="form-control"
                  rows="5"
                  id="Message"
                  placeholder="Message"
                  name="text"
                  style={{
                    marginBottom: "24px",
                    width: "448px",
                    height: "80px",
                    fontSize: "14px",
                  }}
                ></textarea>

                <button
                  type="submit "
                  class="btn btn-primary"
                  style={{
                    width: "448px",
                    height: "56px",
                    fontSize: "16px",
                    marginBottom: "64px",
                    backgroundColor: "#6237DE",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
