import React, { useState, useEffect, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoinInfoBlock from "../../components/CoinInfoBlock";
import Disclaimer from "../../components/Disclaimer";

import TrendDisclaimer from "../../assets/TrendPediction/TrendDisclaimer.svg";

import Select from "react-select";

import Bitcoin from "../../assets/TrendPediction/Bitcoin.svg";
import Tether from "../../assets/TrendPediction/Tether.svg";
import TetherBatch from "../../assets/TrendPediction/TetherBatch.svg";
import Timer from "../../assets/TrendPediction/Timer.svg";
import NextButton from "../../assets/TrendPediction/NextButton.svg";

import { Pie, PieChart } from "recharts";

// import Lottie from "lottie-react";
// import Loader from "../../assets/Loader/Loader.json";
// import { useLottie } from "lottie-react";
import lottie from "lottie-web";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { pred } from "../../features/user/predSlice";
import axios from "axios";

// import Caution from "../../assets/TrendPediction/Caution.png";

const TrendPrediction = () => {
  const [loading, setLoading] = useState(true);

  const [preddata, setPredata] = useState(preddata1);

  const preddata1 = useSelector((state) => state.pred.pred);

  console.log("preddata" + preddata);

  // let [threshold, setThreshold] = useState(false);

  const { isAuthenticated } = useAuth0();

  // let [timerThresholdReached, setTimerThresholdReached] = useState(true);

  // Fetching token Data from Store
  const token = useSelector((state) => state.user.token);
  const threshold = useSelector((state) => state.user.threshold);
  // console.log("Token state", token);

  const currentTimeStamp = new Date().toISOString().split(".")[0] + "Z";

  // console.log(currentTimeStamp);

  //Fetching Prediction Data From API

  let url;
  if (!isAuthenticated) {
    url = `https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/sample_predictions?ts=${currentTimeStamp}`;
  } else {
    url = `https://rx03iubpad.execute-api.us-east-2.amazonaws.com/test/v1/predictions?ts=${currentTimeStamp}`;
  }

  const dispatch = useDispatch();

  const config = {
    headers: {
      "content-Type": "application/json",
      Authorization: token,
    },
  };

  async function fetchPredData() {
    const response = await axios.get(url, config);

    dispatch(pred(response));

    setLoading(false);
  }

  useEffect(() => {
    fetchPredData();
  }, []);

  useEffect(() => {
    let interval;
    if (threshold === true) {
      interval = setTimeout(() => {
        /* console.log("Query Status is 0");
        console.log(data?.query_statusCode); */
        // setTimerThresholdReached(false);
        fetchPredData();
        setLoading(true);
      }, 3.5 * 60 * 1000);
    } else {
      fetchPredData();
      setLoading(false);
    }

    return clearInterval(interval);
  }, [threshold]);

  // Logic 1
  /* useEffect(() => {
    let interval;
    const fetchPredData = async () => {
      const response = await axios.get(url, config);
      const data = response.data;
      const query = data?.query_statusCode;
      // setLoading(false);

      if (query === 0) {
        interval = setTimeout(() => {
          console.log("Query Status is 0");
          console.log(data?.query_statusCode);
          // setTimerThresholdReached(false);
          fetchPredData();
          setLoading(true);
        }, 100 * 1000);
      } else if (query === 1) {
        console.log("Query status is 1 wohoo");
        dispatch(pred(response));
        clearInterval(interval);

        setLoading(false);
      }
    };

    fetchPredData();

    return () => clearInterval(interval);
  }, []);
 */
  // let interval;

  // if (preddata?.data?.query_statusCode === "1") {
  //   interval = setTimeout(() => {
  //     console.log("Interval is Triggerd");

  //     fetchPredData();
  //     setLoading(true);
  //   }, 3.5 * 60 * 1000);
  // } else {
  //   clearInterval(interval);
  // }
  // return () => clearInterval(interval);

  // console.log("TrendPrediction Data : ", preddata?.data?.data?.payload);

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

  // useEffect(() => {
  //   fetchPredData();
  // }, []);

  // const preddata = useSelector((state) => state.pred.pred);

  // console.log("query_statusCode : ", preddata?.data?.query_statusCode);

  // console.log("TrendPrediction Data : ", preddata);
  // console.log("TrendPrediction Data : ", preddata?.data?.data?.payload);

  // setInterval(() => {
  //   let minutes = new Date();

  //   if (minutes.getUTCMinutes === 0) {
  //     setChange(0);
  //   }

  //   if (minutes.getUTCMinutes() === 30) {
  //     setChange(30);
  //   }

  //   if (minutes.getUTCMinutes() === 3) {
  //     setChange(3);
  //   }

  //   if (minutes.getUTCMinutes() === 33) {
  //     setChange(33);
  //     //console.log("change happened");
  //   }
  // }, 60 * 1000);

  // Calls the Loader

  // let res;
  // if (preddata?.data?.data?.payload === 1) {
  //   res = true;
  // } else {
  //   res = false;
  // }
  // let x ;
  // if()

  const coins = [
    {
      label: "ETH",
      value: "ETH",
    },
    {
      label: "BTC",
      value: "BTC",
    },
    {
      label: "BNB",
      value: "BNB",
    },
    {
      label: "DOT",
      value: "DOT",
    },
    {
      label: "ADA",
      value: "ADA",
    },
    {
      label: "ATOM",
      value: "ATOM",
    },
  ];

  function changeFunction(coinsdata) {
    const updateddata = preddata.filter((x) => {
      console.log("updateddta + " + preddata);
    });
  }

  // const changeFunction = (coinsdata) => {};

  // function filterCoin(coin) {
  //   return (coin = document.getElementById("filterCoin").value);
  // }

  return (
    <div>
      <Header />
      {/* {threshold && (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      )} */}

      {loading && (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      )}
      {/* {loading && (
        <>
          <div className="d-flex justify-content-center align-items-center ">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      )} */}
      {/* {res === false && (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="" style={{ width: 250, height: 250 }} id="lottie" />
        </div>
      )} */}
      {/* {loading ? (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      ) : ( */}
      {!loading && (
        <>
          <div className="container d-flex justify-content-between  my-4">
            <div className="h3">Trend Prediction</div>
            <div className="col-lg-4">
              <Select
                closeMenuOnSelect={false}
                className="fw-bold text-dark"
                options={coins}
                isMulti={true}
                // onClick={() => changeFunction()}
                id="filterCoin"
                onChange={changeFunction}
                placeholder="Filter by Coin"
              />
            </div>
          </div>

          <CoinInfoBlock
            datafromparent={preddata?.data?.data?.payload[0]}
            // trend={preddata?.data?.data?.payload[0]}
          />
          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[1]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[2]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[3]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[4]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[5]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[6]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[7]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[8]} />

          <CoinInfoBlock datafromparent={preddata?.data?.data?.payload[9]} />

          <Disclaimer />
        </>
      )}
      {/* )} */}
      <Footer />
    </div>
  );
};

export default TrendPrediction;
