import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoinInfoBlock from "../../components/CoinInfoBlock";
import Disclaimer from "../../components/Disclaimer";

import Select from "react-select";

import lottie from "lottie-web";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { pred } from "../../features/user/predSlice";
import axios from "axios";

const TrendPrediction = () => {
  const [loading, setLoading] = useState(true);

  const [filteredCoins, setFilteredCoins] = useState([]);

  const [coinsData, setCoinsData] = useState([]);

  let [trigger, setTrigger] = useState(false);

  const coinsDataAr = useSelector((state) => {
    if (state && state.pred && state.pred.pred && state.pred.pred.data) {
      // console.log("state", state);
      return state.pred.pred.data.data.payload;
    }
    return [];
  });

  const thresholdindicator = useSelector((state) => state.threshold.threshold);

  /*  console.log("coinsDataAr" + coinsDataAr); */

  const { isAuthenticated } = useAuth0();

  // let [timerThresholdReached, setTimerThresholdReached] = useState(true);

  // Fetching token Data from Store
  const token = useSelector((state) => state.user.token);

  console.log("thresholdindicator", thresholdindicator);

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

    /*     setData((data) => {
      if (data) {
        return data.data.payload;
      }
      return [];
    }); */
    setCoinsData(response?.data?.data?.payload); /* Working */

    dispatch(pred(response));

    /* setLoading(false); */
  }

  useEffect(() => {
    fetchPredData();
  }, []);

  console.log("setCoinsData", coinsData);

  useEffect(() => {
    setTrigger(thresholdindicator);
  }, [thresholdindicator]);

  useEffect(() => {
    let interval;
    if (trigger === true) {
      setLoading(true);
      interval = setTimeout(() => {
        // console.log("Query Status is 0");
        console.log("OOOOOOOh Yes");
        setLoading(false);
      }, 60 * 1000);
    } else {
      fetchPredData();
      console.log("NoNoNoNoNoNoNoNoNo");
      setLoading(false);
    }

    return clearInterval(interval);
  }, [trigger]);

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

  // Main Map Function
  /*   const coins = coinsDataAr.map((data) => ({
    label: `${data.base_asset}/${data.quote_asset}`,
    value: data.asset,
    data,
  })); */
  const coins = coinsDataAr.map((data) => ({
    label: `${data.base_asset}`,
    value: data.asset,
    data,
  }));

  // const coins = coinsDataAr.map((data) => ({
  //   cat: data.asset,
  //   key: `${data.base_asset}`,
  //   data,
  // }));

  /*  console.log("coins" + coins); */

  /* const filter = useMemo(() => changeFunction(filteredCoins), [filteredCoins]); */

  function changeFunction(coinsdata) {
    setFilteredCoins(coinsdata);
  }

  // console.log("filtereCoins", filteredCoins);

  // const changeFunction = (coinsdata) => {};

  // function filterCoin(coin) {
  //   return (coin = document.getElementById("filterCoin").value);
  // }

  return (
    <div>
      <Header />

      {loading && (
        <>
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <div className="" style={{ width: 250, height: 250 }} id="lottie" />
          </div>
        </>
      )}

      {!loading && (
        <>
          <div className="container d-flex justify-content-between  my-4">
            <div className="h3">Trend Prediction</div>
            <div className="col-lg-4 ">
              <Select
                closeMenuOnSelect={false}
                className="fw-bold text-dark "
                options={coins}
                isMulti={true}
                id="filterCoin"
                onChange={changeFunction}
                placeholder="Filter by Coin"
              />
            </div>
            {/* <Multiselect
              displayValue="key"
              // onKeyPressFn={function noRefCheck() {}}
              // onRemove={function noRefCheck() {}}
              // onSearch={function noRefCheck() {}}
              // onSelect={function noRefCheck() {}}
              onChange={changeFunction}
              options={coins}
              showCheckbox
            /> */}
          </div>

          {filteredCoins.length === 0
            ? coins.map((curr) => (
                <CoinInfoBlock
                  key={`filterredCoins_${curr.cat}`}
                  datafromparent={curr.data}
                  // trend={preddata?.data?.data?.payload[0]}
                />
              ))
            : filteredCoins.map((curr) => (
                <CoinInfoBlock
                  key={`filterredCoins_${curr.cat}`}
                  datafromparent={curr.data}
                  // trend={preddata?.data?.data?.payload[0]}
                />
              ))}

          <Disclaimer />
        </>
      )}
      <Footer />
    </div>
  );
};

export default TrendPrediction;
