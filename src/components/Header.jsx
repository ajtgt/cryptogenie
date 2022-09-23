import { React, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../assets/Header/Logo.svg";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { Link, useLocation } from "react-router-dom";

import { HashLink, NavHashLink } from "react-router-hash-link";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/user/userSlice";

const Header = () => {
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const dispatch = useDispatch();

  const location = useLocation();
  /* console.log("Location: ", location); */

  // const location = useLocation();

  // const user = useSelector((state) => state.user.token);
  // console.log("Token state", user);

  // const { pathname, hash, key } = useLocation();

  isAuthenticated &&
    getIdTokenClaims()
      .then((claims) => {
        dispatch(login(claims));
      })
      .catch((err) => {
        console.debug("Something went wrong", err);
      });

  // location = {
  //   pathname: "/",
  //   hash: "#projects",
  // };

  // Navigation to particular part of page
  // useEffect(() => {

  //   if (hash === "") {
  //     window.scrollTo(0, 0);
  //   }

  //   else {
  //     setTimeout(() => {
  //       const id = hash.replace("#", "");
  //       const element = document.getElementById(id);
  //       if (element) {
  //         element.scrollIntoView();
  //       }
  //     }, 0);
  //   }
  // }, [pathname, hash, key]);

  // do this on route change

  // Navbar active nav item

  // document.querySelectorAll(".nav-link").forEach((ele) =>
  //   ele.addEventListener("onClick", function (event) {
  //     event.preventDefault();
  //     document
  //       .querySelectorAll(".nav-link")
  //       .forEach((ele) => ele.classList.remove("text-decoration-underline"));
  //     this.classList.add("text-decoration-underline");
  //   })
  // );

  // const header = document.getElementById("unordered-list");
  // let btns = document.getElementsByClassName("nav-link");
  // for (let i = 0; i < btns.length; i++) {
  //   btns[i].addEventListener("onClick", function () {
  //     var current = document.getElementsByClassName(
  //       "text-decoration-underline"
  //     );
  //     current[0].className = current[0].className.replace(
  //       " text-decoration-underline",
  //       ""
  //     );
  //     this.className += " text-decoration-underline";
  //   });
  // }

  // function myFunction(e) {
  //   if (document.querySelector("#navList a.active") !== null) {
  //     document.querySelector("#navList a.active").classList.remove("active");
  //   }
  //   e.target.className = "active";
  // }
  // function myFunction(e) {
  //   var elems = document.querySelector(".active");
  //   if (elems !== null) {
  //     elems.classList.remove("active");
  //   }
  //   e.target.className = "active";
  // }

  // function myFunction(e) {
  //   var elems = document.querySelectorAll(".active");
  //   [].forEach.call(elems, function (el) {
  //     el.classList.remove("active");
  //   });
  //   e.target.className = "active";
  // }

  /* Scroll Code */
  // document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  //   anchor.addEventListener("click", function (e) {
  //     e.preventDefault();
  //     document.querySelector(this.getAttribute("href")).scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   });
  // });

  /*   Scroll Code 2 */

  // useEffect(() => {
  //   if (location.hash) {
  //     let elem = document.getElementById(location.hash.slice(1));
  //     if (elem) {
  //       elem.scrollIntoView({ behavior: "smooth" });
  //     }
  //   } else {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   }
  // }, [location]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom bg-white sticky-top">
        {/* Desktop View  */}
        <div className="container my-1 py-3 d-none d-lg-block d-lg-flex">
          <div>
            <a className="navbar-brand" href="/home">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>

          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-md-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul
              id="navList"
              // onClick={myFunction}
              className="navbar-nav  mb-2 mb-lg-0 d-md-flex flex-row mx-md-auto "
            >
              {/* <Link to="/" className="nav-item  me-5 text-decoration-none"> */}
              <a
                className="nav-link active fs-6  me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home"
              >
                Home
              </a>
              {/* </Link> */}

              <a
                className="nav-link fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home#features"
              >
                Features
              </a>
              {/* <a to="/#features" className="nav-item text-decoration-none me-5">
                Features
              </a> */}
              {/* <NavHashLink
                className="nav-link  fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                smooth
                to="/home/#features"
                // href="/home#features"
              >
                Features
              </NavHashLink> */}

              {/* <Link to="/home/#features">Features</Link> */}

              {/*  <HashLink
                // example of custom scroll function using the scroll prop
                // scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
                // to={"/home/#features"}
                smooth
                to="/home/#features"
              >
                Features
              </HashLink> */}
              {/* <Link
                to={{
                  pathname: "/home",
                }}
              >
                Features
              </Link> */}

              {/* </Link> */}
              {/* <Link
                to="/#pricing"
                className="nav-item text-decoration-none me-5"
              > */}
              <a
                className="nav-link fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                aria-current="page"
                href="/home#pricing"
              >
                Pricing
              </a>
              {/* </Link> */}
              {/* <Link
                to="/trendprediction"
                className="nav-item me-5 text-decoration-none"
              > */}
              <a
                className="nav-link  fs-6 me-4"
                style={{ fontFamily: "Satoshi" }}
                href="/trendprediction"
              >
                Prediction
              </a>
              {/* </Link> */}
              {/* <a href="/trendprediction">Prediction</a> */}
              {/* <Link className="nav-item text-decoration-none"> */}
              {/* </Link> */}
            </ul>
          </div>
          <div className="d-flex">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        {/* Mobile View */}
        <div className="container py-3 d-lg-none d-lg-flex sticky-top">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div>
            <a className="navbar-brand" href="#">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>
          <div className="d-flex flex-row d-sm-flex flex-sm-row">
            <LoginButton />
            <LogoutButton />
          </div>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex justify-content-center">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/#features"
                >
                  Features
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#pricing"
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item d-flex justify-content-center">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#prediction"
                >
                  Prediction
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
