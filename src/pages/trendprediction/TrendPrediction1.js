import React, { useState, useEffect, useRef } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CoinInfoBlock from "../../components/CoinInfoBlock";
import Disclaimer from "../../components/Disclaimer";

import Select from "react-select";

import lottie from "lottie-web";

import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

const TrendPrediction = () => {
  const [loading, setLoading] = useState(false);

  const [filteredCoins, setFilteredCoins] = useState([]);

  const [coinsData, setCoinsData] = useState([]);

  let [trigger, setTrigger] = useState(false);

  const thresholdindicator = useSelector((state) => state.threshold.threshold);

  const { isAuthenticated } = useAuth0();

  // Fetching token Data from Store
  const token = useSelector((state) => state.user.token);

  console.log("thresholdindicator", thresholdindicator);

  const currentTimeStamp = new Date().toISOString().split(".")[0] + "Z";

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
    setLoading(true);

    const response = await axios.get(url, config);
    setCoinsData(response?.data?.data?.payload); /* Working */

    if (response && response.data && response.data.data) {
      return setLoading(false);
      console.log("response", response);
    }
    return [];
  }

  useEffect(() => {
    fetchPredData();
  }, []);

  console.log("setCoinsData", coinsData);

  useEffect(() => {
    if (thresholdindicator === true) {
      setLoading(true);
      setTrigger(true);
    }
  }, [thresholdindicator]);

  useEffect(() => {
    console.log("trigger Laoding======", trigger);

    if (trigger === true) {
      setTimeout(() => {
        console.log("OOOOOOOh Yessssssssssssssssss");

        setLoading(false);
      }, 4 * 60 * 1000);
    } else {
      console.log("NoNoNoNoNoNoNoNoNo");
      console.log("trigger Laoding oooh no ======", trigger);
    }

    return clearInterval();
  }, [trigger]);

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

  const coins = coinsData.map((data) => ({
    label: `${data.base_asset}`,
    value: data.asset,
    data,
  }));

  function changeFunction(coinsdata) {
    setFilteredCoins(coinsdata);
  }

  return (
    <div>
      <Header />

      {loading ? (
        <>
          <div className="d-flex justify-content-center vh-100 align-items-center">
            <div
              className="spinner-border"
              style={{ width: "5rem", height: "5rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
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
          </div>

          {filteredCoins.length === 0
            ? coins.map((curr, i) => (
                <CoinInfoBlock key={i} datafromparent={curr.data} />
              ))
            : filteredCoins.map((curr, i) => (
                <CoinInfoBlock key={i} datafromparent={curr.data} />
              ))}

          <Disclaimer />
        </>
      )}

      <Footer />
    </div>
  );
};

export default TrendPrediction;
