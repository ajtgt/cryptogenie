import React, { useState, useEffect } from "react";
import PricingCard1 from "../assets/LandingPage/PricingCard1.svg";
import Tick from "../assets/LandingPage/Tick.svg";
import BlackLine from "../assets/LandingPage/BlackLine.svg";

import { useAuth0 } from "@auth0/auth0-react";

import { useSelector } from "react-redux";

import axios from "axios";

const PricingCards = ({ data, user }) => {
  const { isAuthenticated } = useAuth0();

  const token = useSelector((state) => state.user.token);
  // console.log("token", token);

  const [session, setSession] = useState([]);

  // console.log("API prop data", user);
  let price_id = user;

  // const clickFunction = function () {
  //   price_id = user;
  //   console.log("Price _ iD", price_id);

  //   const url =
  //     "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/create_session";

  //   const param = {
  //     price_id: price_id,
  //   };

  //   const config = {
  //     headers: {
  //       Authorization: token,
  //     },
  //   };
  //   function fetchSession() {
  //     const request = axios.post(url, param, config);
  //     setSession(request.data);
  //     console.log("Session", request.data);
  //     // console.log("Session", session);
  //   }
  //   console.log("Session", session);
  // };

  const clickFunction = function () {
    price_id = user;
    console.log("Price_iD", price_id);

    const url =
      "https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/create_session";

    const param = {
      price_id: price_id,
    };

    const config = {
      headers: {
        Authorization: token,
      },
    };
    axios
      .post(
        url,
        {
          price_id: "price_1LPju6SBogyOwRQI0xdwFEPv",
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log("sucessful", res.data.session_url);
        window.location.href = res.data.session_url;
      })
      .catch((err) => console.log(err));
    // console.log("Session", session);
  };

  return (
    <>
      <div className="card h-100">
        <div className="d-sm-flex flex-sm-column pt-3 px-3 pb-4 h-100  justify-content-sm-between">
          <div className="mb-4 ">
            <img src={BlackLine} className="w-100" />
          </div>
          <div className="d-flex justify-content-center align-items-center mb-3">
            <div className="h3">{data.monthly}</div>
          </div>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <div className="">{data.yearly}</div>
          </div>
          <div
            className="d-flex justify-content-center align-items-center mb-5 "
            style={{ padding: "22px" }}
          >
            <img className="mt-auto" src={PricingCard1} />
          </div>
          {data?.features.map((f, i) => {
            return (
              <div
                className="d-flex flex-column  align-items-start mb-1 "
                key={i}
              >
                <div className="d-lg-flex justify-content-lg-start">
                  <div className=" me-3">
                    <img src={Tick} width="24px" height="24px" />
                  </div>
                  <div>
                    <div>{f}</div>
                  </div>
                </div>
              </div>
            );
          })}
          {isAuthenticated ? (
            <div className="d-lg-flex  justify-content-lg-center  mt-auto">
              <button
                type="button"
                className="btn btn-primary w-100 rounded-0 p-3 mt-5"
                onClick={clickFunction}
              >
                {data.button2}
              </button>
            </div>
          ) : (
            <div className="d-lg-flex  justify-content-lg-center  mt-auto">
              <button
                type="button"
                className="btn btn-primary w-100 rounded-0 p-3 mt-5"
              >
                {data.button1}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PricingCards;

// Code 1

// <div>
//   <div className="row d-sm-flex d-lg-flex flex-lg-row flex-sm-row d-none d-sm-block g-3">
//     {data?.map((e) => {
//       return (
//         <div className=" col-sm-6 col-md-3">
//           <div className="card  h-100">
//             <div className="d-sm-flex flex-sm-column pt-3 px-3 pb-4 h-100  justify-content-sm-between">
//               <div className="mb-4 ">
//                 <img src={BlackLine} className="w-100" />
//               </div>
//               <div className="d-flex justify-content-center align-items-center mb-3">
//                 <div className="h3">{e.monthly}</div>
//               </div>
//               <div className="d-flex justify-content-center align-items-center mb-5">
//                 <div className="">{e.yearly}</div>
//               </div>
//               <div
//                 className="d-flex justify-content-center align-items-center mb-5 "
//                 style={{ padding: "22px" }}
//               >
//                 <img className="mt-auto" src={PricingCard1} />
//               </div>
//               {e?.features.map((f) => {
//                 return (
//                   <div className="d-flex flex-column  align-items-start mb-1 ">
//                     <div className="d-lg-flex justify-content-lg-start">
//                       <div className=" me-3">
//                         <img src={Tick} width="24px" height="24px" />
//                       </div>
//                       <div>
//                         <div>{f}</div>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//               {isAuthenticated ? (
//                 <div className="d-lg-flex  justify-content-lg-center  mt-auto">
//                   <button
//                     type="button"
//                     className="btn btn-primary w-100 rounded-0 p-3 mt-5"
//                   >
//                     {e.button2}
//                   </button>
//                 </div>
//               ) : (
//                 <div className="d-lg-flex  justify-content-lg-center  mt-auto">
//                   <button
//                     type="button"
//                     className="btn btn-primary w-100 rounded-0 p-3 mt-5"
//                   >
//                     {e.button1}
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </div>;

// Code 2

{
  /* <div>
  <div className=" g-3">
    {/* <div className="row d-sm-flex d-lg-flex flex-lg-row flex-sm-row d-none d-sm-block g-3"> */
}
{
  /* {data?.map((e) => { */
}
{
  /* return ( */
}
// <div className=" col-sm-6 col-md-3">
//   <div className="card   h-100">
//     <div className="d-sm-flex flex-sm-column pt-3 px-3 pb-4 h-100  justify-content-sm-between">
//       <div className="mb-4 ">
//         <img src={BlackLine} className="w-100" />
//       </div>
//       <div className="d-flex justify-content-center align-items-center mb-3">
//         <div className="h3">{data.monthly}</div>
//       </div>
//       <div className="d-flex justify-content-center align-items-center mb-5">
//         <div className="">{data.yearly}</div>
//       </div>
//       <div
//         className="d-flex justify-content-center align-items-center mb-5 "
//         style={{ padding: "22px" }}
//       >
//         <img className="mt-auto" src={PricingCard1} />
//       </div>
//       {data?.features.map((f) => {
//         return (
//           <div className="d-flex flex-column  align-items-start mb-1 ">
//             <div className="d-lg-flex justify-content-lg-start">
//               <div className=" me-3">
//                 <img src={Tick} width="24px" height="24px" />
//               </div>
//               <div>
//                 <div>{f}</div>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//       {isAuthenticated ? (
//         <div className="d-lg-flex  justify-content-lg-center  mt-auto">
//           <button
//             type="button"
//             className="btn btn-primary w-100 rounded-0 p-3 mt-5"
//           >
//             {data.button2}
//           </button>
//         </div>
//       ) : (
//         <div className="d-lg-flex  justify-content-lg-center  mt-auto">
//           <button
//             type="button"
//             className="btn btn-primary w-100 rounded-0 p-3 mt-5"
//           >
//             {data.button1}
//           </button>
//         </div>
//       )}
//     </div>
//   </div>
// </div>
{
  /* ); */
}
{
  /* })} */
}
// </div>
// </div>; */}
