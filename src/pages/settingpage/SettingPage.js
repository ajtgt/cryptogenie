import { React, useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";



import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UpgradePlan from "../../components/UpgradePlan";


import { useSelector } from "react-redux";
import lottie from "lottie-web";



const SettingPage = () => {
  const [cust, setCust] = useState([]);
  const [user, setUser] = useState([]);
  const token = useSelector((state) => state.user.token);
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  };



  const url1 =
    "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/cus_history";

  const url2 =
    "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/fetchuser";

  async function fetchCustData() {
    const request1 = await axios.get(url1, config);
    setCust(request1);

    
  }

  async function fetchUserData() {
    const request2 = await axios.get(url2, config);
    
    setUser(request2);
    
  }

  useEffect(() => {
    fetchCustData();

    console.log("Customer", cust);
  }, []);

  useEffect(() => {
    

    fetchUserData();
    setLoading(false);

    console.log("User");
  }, []);

  console.log("Token in Setting Page", token);

 

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.getElementById("lottie"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Loader/Loader.json"),
    });
    return () => instance.destroy();
  }, []);

  // Formik
  const formik = useFormik({
    initialValues: {
      enterNewPassword: "",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      enterNewPassword: Yup.string()
        .required("Password Required")
        .matches(
          /^.*(?=.{10,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
          "Password must contain at least 10 characters, one uppercase, one number and one special case character"
        ),
      confirmNewPassword: Yup.string()
        .required("Confirm Password Required")
        .test("passwords-match", "Password Mismatched", function (value) {
          return this.parent.enterNewPassword === value;
        }),

    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="d-sm-flex flex-sm-column align-items-sm-send vh-100 ">
        <div>
          <Header />
        </div>

        <>
          {loading && (
            <>
              <div className="d-flex justify-content-center align-items-center vh-100 ">
                <div
                  className=""
                  style={{ width: 250, height: 250 }}
                  id="lottie"
                />
              </div>
            </>
          )}
        </>

        <>
          {!loading && (
            <>
              <div className="">
                <div className="container ">
                  <div className="h4">Settings</div>
                  
                  <div className="">
                    <ul className="nav nav-pills " id="myTab">
                      <li className="nav-item">
                        <a
                          href="#profile"
                          className="nav-link active"
                          data-bs-toggle="pill"
                        >
                          Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="#upgradeplan"
                          className="nav-link "
                          data-bs-toggle="pill"
                        >
                          Upgrade Plan
                        </a>
                      </li>
                      <li>
                        <a
                          href="#activityhistory"
                          className="nav-link "
                          data-bs-toggle="pill"
                        >
                          Activity History
                        </a>
                      </li>
                      <li>
                        <a
                          href="#accountdetails"
                          className="nav-link "
                          data-bs-toggle="pill"
                        >
                          Account Details
                        </a>
                      </li>
                    </ul>

                    <div className="tab-content mt-4">
                      
                      <div id="profile" className="tab-pane active">
                        <a
                          className="text-decoration-none h3 text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#changePassword"
                        >
                          Change Password
                        </a>
                      </div>
                      <div
                        className="modal fade"
                        id="changePassword"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered ">
                          <div className="modal-content px-3">
                            <form onSubmit={formik.handleSubmit}>
                              <div className="modal-header border-0 my-3 ">
                                <h2
                                  className="modal-title "
                                  id="exampleModalLabel"
                                >
                                  Change Password
                                </h2>
                                <button
                                  type="button"
                                  className="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div className="modal-body">
                                <div className="row g-3">
                                  <div className="col-12 mb-4">
                                    {formik.touched.enterNewPassword &&
                                    formik.errors.enterNewPassword ? (
                                      <p
                                        className="text-danger m-0"
                                        style={{ fontSize: "0.7rem" }}
                                      >
                                        {formik.errors.enterNewPassword}
                                      </p>
                                    ) : null}

                                    <input
                                      className="form-control p-3 border-0 rounded-0 tt"
                                      id="enterNewPassword"
                                      name="enterNewPassword"
                                      type="password"
                                      placeholder="Enter New Password"
                                      onChange={formik.handleChange}
                                      value={formik.values.enterNewPassword}
                                      onBlur={formik.handleBlur}
                                    />
                                  </div>
                                  <div className="col-12 mb-0">
                                    {formik.touched.confirmNewPassword &&
                                    formik.errors.confirmNewPassword ? (
                                      <p
                                        className="text-danger m-0"
                                        style={{ fontSize: "0.7rem" }}
                                      >
                                        {formik.errors.confirmNewPassword}
                                      </p>
                                    ) : null}
                                    <input
                                      className="form-control p-3 border-0 rounded-0 "
                                      id="confirmNewPassword"
                                      name="confirmNewPassword"
                                      type="password"
                                      placeholder="Confirm New Password"
                                      onChange={formik.handleChange}
                                      value={formik.values.confirmNewPassword}
                                      onBlur={formik.handleBlur}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="modal-footer  border-0">
                                <button
                                  type="button"
                                  className="btn btn-secondary p-3 border rounded-0"
                                  data-bs-dismiss="modal"
                                >
                                  Back
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary p-3 rounded-0 "
                                >
                                  Change Password
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {/* Profile Tab Contenet End */}
                      <div id="upgradeplan" className="tab-pane fade">
                        <UpgradePlan />
                      </div>
                      <div id="activityhistory" className="tab-pane fade">
                        <ol className="list-group list-group-numbered">
                          <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                              <div className="fw-bold">
                                {cust.data?.customer_history[0].date}
                              </div>
                              {cust.data?.customer_history[0].event}
                            </div>
                          </li>
                        </ol>
                      </div>
                      <div id="accountdetails" className="tab-pane fade">
                        <div className="row mb-3">
                          <div className="col-3 border-bottom">Your Plan:</div>
                          <div className="col-3 border-bottom text-capitalize">
                            {user.data?.users?.[0].user_plan_type}
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3 border-bottom">Plan Type:</div>
                          <div className="col-3 border-bottom text-capitalize">
                            {user.data?.users?.[0].user_plan_type}
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3 border-bottom">Started On:</div>
                          <div className="col-3 border-bottom"></div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3 border-bottom">
                            Payment Method:
                          </div>
                          <div className="col-3 border-bottom">
                            <button
                              type="btn"
                              className="btn btn-primary fw-bold"
                            >
                              View or manage payment method
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </>

        <div className="mt-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SettingPage;
