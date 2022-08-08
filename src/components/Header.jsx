import { React, useEffect } from "react";
import Logo from "../assets/Header/Logo.svg";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom bg-white">
        {/* Desktop View  */}
        <div class="container py-3 d-none d-lg-block d-lg-flex">
          <div>
            <a class="navbar-brand" href="#">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-md-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Prediction
                </a>
              </li>
            </ul>
          </div>
          <div class="d-flex">
            <LoginButton />
            <LogoutButton />
          </div>
        </div>
        {/* Mobile View */}
        <div class="container py-3 d-lg-none d-lg-flex">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div>
            <a class="navbar-brand" href="#">
              <img src={Logo} className="img-fluid" />
            </a>
          </div>
          <div class="d-flex flex-row d-sm-flex flex-sm-row">
            <LoginButton />
            <LogoutButton />
          </div>
          <div
            class="collapse navbar-collapse d-lg-flex justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item d-flex justify-content-center">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item d-flex justify-content-center">
                <a class="nav-link active" aria-current="page" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item d-flex justify-content-center">
                <a class="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item d-flex justify-content-center">
                <a class="nav-link active" aria-current="page" href="#">
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

// <div className="sticky-top bg-white border-bottom ">
//   {/* Desktop View */}
//   <div className="container d-none d-md-block   bg-white">
//     <div className="py-4 d-md-flex justify-content-between">
//       <div className="LeftSide">
//         <img src={Logo} className="img-fluid" />
//       </div>
//       <div className="d-sm-flex d-sm-row MiddleSide">
//         <div className="d-sm-flex align-items-center px-4">Home</div>
//         <div className="d-sm-flex align-items-center px-4">Features</div>
//         <div className="d-sm-flex align-items-center px-4">Pricing </div>
//         <div className="d-sm-flex align-items-center px-4 text-dark">
//           Prediction
//         </div>
//       </div>
//       <div className="RightSide">
//         <LoginButton />
//         <LogoutButton />
//       </div>
//     </div>
//   </div>

// ==============================================

// return (
//   <div className="conatiner-fluid ">
//     <div
//       className="row navbar navbar-expand-sm border-bottom g-0 "
//       style={{ paddingTop: "32px", paddingBottom: "32px" }}
//     >
//       <div className="col" style={{ marginLeft: "72px" }}>
//         <div className="d-flex">
//           <img src={Logo}></img>
//         </div>
//       </div>
//       <div className="col ">
//         <ul class="navbar-nav " style={{ fontSize: "16px" }}>
//           <Link
//             to="/"
//             class="nav-item"
//             style={{ marginRight: "40px", textDecoration: "none" }}
//           >
//             <a class="nav-link text-dark" href="#home">
//               Home
//             </a>
//           </Link>
//           <Link
//             to="/#features"
//             class="nav-item"
//             style={{ marginRight: "40px", textDecoration: "none" }}
//           >
//             <a class="nav-link text-dark" href="#features">
//               Feature
//             </a>
//           </Link>
//           <Link
//             to="/#pricing"
//             class="nav-item"
//             style={{ marginRight: "40px", textDecoration: "none" }}
//           >
//             <a class="nav-link text-dark" href="#pricing">
//               Pricing
//             </a>
//           </Link>
//           <Link
//             to="/#About"
//             class="nav-item"
//             style={{ marginRight: "40px", textDecoration: "none" }}
//           >
//             <a class="nav-link text-dark" href="#About">
//               About
//             </a>
//           </Link>
//           <li class="nav-item">
//             <a class="nav-link text-dark" href="#">
//               FAQ
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* LogIn Button */}
//       <LoginButton />
//       <LogoutButton />
//     </div>
//   </div>
// );

// ==========================================

// <nav class="navbar navbar-expand-lg navbar-light border-bottom mb-5 ">
//   <div className="container">
//     <a class="navbar-brand" href="#">
//       <img src={Logo}></img>
//     </a>
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             Home
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             Features
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             Pricing
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             About
//           </a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link active" aria-current="page" href="#">
//             FAQ
//           </a>
//         </li>
//       </ul>
//       {/* <div className="d-flex">
//         <div type="button" className="btn ">
//           Sign In
//         </div>
//         <div type="button" className="btn border  ">
//           Sign Up
//         </div>
//       </div> */}
//       <div className="d-flex">
//         <div className="SignIn">
//           <LoginButton />
//         </div>
//         <div className="SignOut">
//           <LogoutButton />
//         </div>
//       </div>
//     </div>
//   </div>
// </nav>
