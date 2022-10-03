import React, { useState, useEffect, memo } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setThreshold } from "../features/user/thresholdSlice";

const CountDown = () => {
  const dispatch = useDispatch();
  const threshold = useSelector((state) => state.threshold.threshold);

  let today = new Date();

  let currenttime = today.getMinutes() + ":" + today.getSeconds();
  let currentmin = today.getMinutes();
  let currentsec = today.getSeconds();

  let startingmin;
  let startingsec;

  if (currentmin > 30) {
    startingmin = 59 - currentmin;
    startingsec = 59 - currentsec;
  } else {
    startingmin = 29 - currentmin;
    startingsec = 59 - currentsec;
  }
  let initialMinute = startingmin;
  let initialSeconds = startingsec;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    let myInterval = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds, minutes]);

  // useEffect(() => {
  //   if (seconds == 0 || seconds == 30 || seconds == 15 || seconds == 45) {
  //     dispatch(setThreshold(!threshold));
  //     /* dispatch(setThreshold(true)); */
  //   }
  // }, [seconds]);

  let timeout;

  function myFunction() {
    timeout = setTimeout(alertFunc, 3 * 1000);
  }

  function alertFunc() {
    dispatch(setThreshold(false));
  }
  useEffect(() => {
    if (seconds === 1 && minutes === 0) {
      dispatch(setThreshold(true));
      /*  dispatch(setThreshold(!threshold)); */
    }
    myFunction();
  }, [seconds]);

  return (
    <>
      {minutes === 0 && seconds === 0 ? null : (
        <b style={{ color: "#6237de" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </b>
      )}
    </>
  );
};

export default CountDown;
