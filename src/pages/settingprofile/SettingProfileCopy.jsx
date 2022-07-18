import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Union from "../../assets/Union.svg";
import Avatar from "../../assets/Avatar.svg";
import Tick from "../../assets/Tick.svg";
import Subtract from "../../assets/Subtract.svg";
import Subtractl from "../../assets/Subtractl.svg";
import "./settingprofile.css";

const SettingProfileCopy = () => {
  return (
    <>
      <Header />
      {/* Main Area */}
      <div className="container-fluid g-0 ">
        <div
          className="row"
          style={{
            width: "544px",
            marginLeft: "64px",
            marginTop: "24px",
          }}
        >
          <h3 style={{ marginBottom: "24px" }}>
            <b>Settings</b>
          </h3>

          <ul
            class=" nav  nav-fill "
            role="tablist"
            style={{
              marginBottom: "24px",
              fontSize: "16px",
              // fontColor: "#000000",
              // backgroundColor: "#6237DE",
            }}
          >
            <li class="nav-item nav-link-hover">
              <a
                class="nav-link active nav-link-hover"
                data-bs-toggle="pill"
                aria-current="page"
                href="#profile"
                style={{ fontColor: "#6237DE" }}
              >
                Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="pill" href="#upgradeplan">
                Upgrade Plan
              </a>
            </li>
          </ul>
        </div>
        {/* { Tab panes open here} */}
        <div class="tab-content">
          {/* First Tab Content for Profile */}

          <div id="profile" class="container-fluid g-0 tab-pane active">
            <main
              className="row g-0"
              style={{
                width: "544px",
                height: "100%",
                marginLeft: "64px",
                marginTop: "20px",
                marginBottom: "104px",
              }}
            >
              <form>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    for="firstname"
                    style={{
                      fontSize: "12px",
                      color: "#757883",
                      marginBottom: "8px",
                    }}
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    placeholder="First name"
                    name="firstname"
                    style={{
                      fontSize: "14px",
                      height: "56px",
                    }}
                  ></input>
                </div>
                <div style={{ marginBottom: "16px" }}>
                  <label
                    for="lastname"
                    style={{
                      fontSize: "12px",
                      color: "#757883",
                      marginBottom: "8px",
                    }}
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    placeholder="Last name"
                    name="lastname"
                    style={{
                      fontSize: "14px",
                      height: "56px",
                    }}
                  ></input>
                </div>
                <div style={{ marginBottom: "40px" }}>
                  <label
                    for="email"
                    style={{
                      fontSize: "12px",
                      color: "#757883",
                      marginBottom: "8px",
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    placeholder="Enter email"
                    name="email"
                    style={{
                      fontSize: "14px",
                      height: "56px",
                    }}
                  ></input>
                </div>
                <div
                  className="row g-0"
                  style={{
                    height: "56px",
                    marginBottom: "48px",
                    fontSize: "16px",
                  }}
                >
                  <div
                    className="col d-flex justify-content-center align-items-center border"
                    type="submit"
                  >
                    <img
                      alt="Google"
                      src="https://assets-yantraka-cryptogenie.s3.us-east-2.amazonaws.com/images/Google.svg"
                    />
                    &nbsp; Sign in with Google
                  </div>

                  <div
                    className="col d-flex justify-content-center align-items-center border"
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
                <div
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                  style={{
                    marginBottom: "48px",
                    color: "#6237DE",
                  }}
                >
                  Change password
                </div>
                <div class="modal" id="staticBackdrop">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header  border-0">
                        <h5 class="modal-title">Change password</h5>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="row g-0">
                            <input
                              type="text"
                              class="form-control"
                              style={{
                                marginBottom: "16px",
                                width: "448px",
                                height: "56px",
                              }}
                            ></input>
                          </div>
                          <div>
                            <input
                              type="email"
                              class="form-control"
                              style={{
                                marginBottom: "16px",
                                width: "448px",
                                height: "56px",
                              }}
                            ></input>
                          </div>
                          <div class="mb-3">
                            <input
                              type="email"
                              class="form-control"
                              style={{
                                marginBottom: "16px",
                                width: "448px",
                                height: "56px",
                              }}
                            ></input>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer  border-0">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                          style={{
                            height: "56px",
                          }}
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          style={{
                            height: "56px",
                          }}
                        >
                          Understood
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    class="btn btn-primary"
                    style={{
                      width: "47.5%",
                      height: "56px",
                      backgroundColor: "#6237DE",
                    }}
                  >
                    Send
                  </button>
                </div>
              </form>
            </main>
          </div>

          {/* Second Content Upgrade plan Content with Navbar */}

          {/* Nav Bar  */}

          <div id="upgradeplan" class="container-fluid g-0 tab-pane fade">
            {/* Upgrade Nav Bar Start */}
            <div
              className="row g-0 "
              style={{
                width: "544px",
                marginLeft: "64px",
                marginTop: "32px",
                marginBottom: "32px",
              }}
            >
              <ul
                class=" nav nav-pills nav-fill"
                role="tablist"
                style={{
                  marginBottom: "24px",
                  fontSize: "16px",
                  width: "248px",
                  height: "32px",
                }}
              >
                <li class="nav-item " style={{ fontColor: "#ffffff" }}>
                  <a
                    class="nav-link active"
                    data-bs-toggle="pill"
                    aria-current="page"
                    href="#monthly"
                  >
                    Monthly
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " data-bs-toggle="pill" href="#annual">
                    Annual
                  </a>
                </li>
              </ul>
            </div>

            {/* Monthly Plan Tab Content */}
            <div className="tab-content">
              <div id="monthly" className="tab-pane active">
                <div
                  class="container-fluid  m-0 d-flex flex-row justify-content-around"
                  style={{
                    marginLeft: "64px",
                    marginRight: "64px",
                    marginBottom: "72px",
                  }}
                >
                  {/* First Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Free</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtract}
                                width="120px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Basic</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>
                            BTCUSDT <br></br>
                            Charts & current predictions
                          </div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>
                            BTCUSDT <br></br>
                            Charts & current predictions
                          </div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>$10</b>
                          <span style={{ fontSize: "16px", marginTop: "10px" }}>
                            /per month
                          </span>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "30px",
                          }}
                        >
                          <span>
                            Yearly : $108 (10% discount)
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <b>$9</b>/per month
                            </div>
                          </span>
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Individual</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>10 coins current predictions</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>More detailed charts</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Third Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Coming Soon</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Professional</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>2-5 user teams</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>More detailed charts</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Trading bots</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fourth Card */}
                  <div>
                    <div
                      class="card"
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Coming Soon</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Enterprise</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Unlimited API use</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Customs Trading Bots</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Annual Plan Tab Content Start */}
              <div id="annual" className=" tab-pane fade">
                <div
                  class="container-fluid  m-0 d-flex flex-row justify-content-around"
                  style={{
                    marginLeft: "64px",
                    marginRight: "64px",
                    marginBottom: "72px",
                  }}
                >
                  {/* First Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Free</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtract}
                                width="120px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Basic</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>
                            BTCUSDT <br></br>
                            Charts & current predictions
                          </div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>
                            BTCUSDT <br></br>
                            Charts & current predictions
                          </div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Second Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>$10</b>
                          <span style={{ fontSize: "16px", marginTop: "10px" }}>
                            /per month
                          </span>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "30px",
                          }}
                        >
                          <span>
                            Yearly : $108 (10% discount)
                            <br />
                            <div className="d-flex justify-content-center align-items-center">
                              <b>$9</b>/per month
                            </div>
                          </span>
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Individual</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>10 coins current predictions</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>More detailed charts</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Third Card */}
                  <div style={{ marginRight: "32px" }}>
                    <div
                      class="card "
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Coming Soon</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Professional</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>2-5 user teams</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>More detailed charts</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Trading bots</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Fourth Card */}
                  <div>
                    <div
                      class="card"
                      style={{ height: "504px", width: "304px" }}
                    >
                      <div class="card-header bg-white border-0">
                        <hr
                          style={{
                            backgroundColor: "#000000",
                            height: "8px",

                            marginTop: "16px",
                          }}
                        ></hr>
                        <div
                          className="h3 d-flex justify-content-center"
                          style={{
                            marginTop: "24px",
                          }}
                        >
                          <b>Coming Soon</b>
                        </div>
                        <div
                          className="d-flex justify-content-center"
                          style={{
                            fontSize: "14px",
                            marginTop: "16px",
                            marginBottom: "50px",
                          }}
                        >
                          Lorem ipsum dolor sit amet,
                        </div>
                        <div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div style={{ position: "absolute", zIndex: "9" }}>
                              <img
                                src={Subtractl}
                                width="160px"
                                height="32"
                              ></img>
                            </div>
                          </div>
                          <div className="d-flex justify-content-center align-items-between">
                            <div
                              style={{
                                position: "absolute",
                                zIndex: "10",
                                fontWeight: "1000",
                                marginTop: "5px",
                              }}
                            >
                              <text>
                                <h6>
                                  <b>Enterprise</b>
                                </h6>
                              </text>
                            </div>
                          </div>

                          <div style={{ position: "relative" }}>
                            <hr
                              style={{
                                width: "100%",
                                marginBottom: "49px",
                              }}
                            ></hr>
                          </div>
                        </div>
                      </div>
                      <div class="card-body bg-white">
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Unlimited API use</div>
                        </div>
                        <div className="d-flex">
                          <img
                            src={Tick}
                            width="20px"
                            height="20px"
                            style={{ marginRight: "18px", marginTop: "5px" }}
                          ></img>
                          <div>Customs Trading Bots</div>
                        </div>
                      </div>
                      <div class="card-footer bg-white border-0 d-flex justify-content-center align-items-center">
                        <div
                          type="button"
                          className=" d-flex justify-content-center align-items-center "
                          style={{
                            width: "256px",
                            height: "56px",
                            color: "#ffffff",
                            backgroundColor: "#6237DE",
                            fontSize: "16px",
                          }}
                        >
                          Get Started
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Annual Plan End */}
          </div>

          {/* Tab panes closed  */}
        </div>

        {/* Tab ^^^^^^^ panes closed */}
      </div>
      <Footer />
    </>
  );
};

export default SettingProfileCopy;
