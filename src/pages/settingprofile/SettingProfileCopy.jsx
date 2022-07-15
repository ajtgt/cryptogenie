import React from "react";
import Union from "../../assets/Union.svg";
import Avatar from "../../assets/Avatar.svg";
import Tick from "../../assets/Tick.svg";
import Subtract from "../../assets/Subtract.svg";
import "./settingprofile.css";

const SettingProfileCopy = () => {
  return (
    <div className="container-fluid ">
      <div className="row navbar navbar-expand-sm border-bottom">
        <div className="col" style={{ marginLeft: "72px" }}>
          <div className="d-flex">
            <img src={Union} style={{ width: "24px", height: "24px" }}></img>
            <h5>
              <b>&nbsp;CryptoGenie</b>
            </h5>
          </div>
        </div>
        <div className="col ">
          <ul class="navbar-nav ">
            <li class="nav-item " style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Home
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Feature
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item" style={{ marginRight: "40px" }}>
              <a class="nav-link text-dark" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-dark" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div
          className="col d-flex justify-content-end"
          style={{ marginRight: "79px" }}
        >
          <div>
            <img
              src={Avatar}
              alt="Avatar"
              style={{ width: "24px", height: "24px" }}
            ></img>
          </div>

          {/* <img alt="Avatar" style={{ width: "24px", height: "24px" }}></img> */}
          <div class="dropdown ">
            <div class="btn dropdown-toggle" data-bs-toggle="dropdown"></div>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  MyProfile
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Setting
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <main
        className="row g-0 "
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
          class=" nav nav-pills nav-fill"
          role="tablist"
          style={{
            marginBottom: "24px",
            fontSize: "16px",
            // fontColor: "#6237DE",
            // backgroundColor: "#6237DE",
          }}
        >
          <li class="nav-item ">
            <a
              class="nav-link active"
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
      </main>
      {/* { Tab panes open here} */}
      <div class="tab-content">
        {/* First Content */}

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
        {/* Second Content Upgrade plan Content */}

        {/* Nav Bar  */}

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
              <a class="nav-link" data-bs-toggle="pill" href="#annual">
                Annual
              </a>
            </li>
          </ul>
        </div>

        <div id="upgradeplan" class="container-fluid g-0 tab-pane fade">
          <div
            class="row g-0"
            style={{
              marginLeft: "64px",
              marginRight: "64px",
              marginBottom: "72px",
            }}
          >
            {/* First Card */}
            <div className="col-3">
              <div class="card " style={{ width: "304px", height: "504px" }}>
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
                        <img src={Subtract} width="120px" height="32"></img>
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
            <div className="col-3">2</div>
            {/* Third Card */}
            <div className="col-3">3</div>
            {/* Fourth Card */}
            <div className="col-3">4</div>
          </div>
        </div>
      </div>

      {/* Tab panes closed */}

      <footer>
        <div
          className="row navbar navbar-expand-sm "
          style={{
            paddingLeft: "64px",
            paddingRight: "64px",
          }}
        >
          <div className="col">
            <div className="d-flex">
              <img src={Union} style={{ width: "24px", height: "24px" }}></img>
              <h5>
                <b>&nbsp;CryptoGenie</b>
              </h5>
            </div>
          </div>
          <div className="col d-flex justify-content-end ">
            <ul class="navbar-nav">
              <li class="nav-item" style={{ marginLeft: "80px" }}>
                <a class="nav-link text-dark" href="#">
                  Feature
                </a>
              </li>
              <li class="nav-item" style={{ marginLeft: "80px" }}>
                <a class="nav-link text-dark" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item" style={{ marginLeft: "80px" }}>
                <a class="nav-link text-dark" href="#">
                  About
                </a>
              </li>
              <li class="nav-item" style={{ marginLeft: "80px" }}>
                <a class="nav-link text-dark" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ paddingLeft: "64px", paddingRight: "64px" }}>
          <hr></hr>
        </div>
        <div
          className="row"
          style={{
            paddingLeft: "64px",
            paddingRight: "64px",
            marginBottom: "24px",
          }}
        >
          <div className="col">@Yantraka.ai, 2022</div>
          <div className="col d-flex flex-row justify-content-end">
            <div>Terms of use</div>
            <div style={{ marginLeft: "80px" }}>Privacy Policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SettingProfileCopy;
