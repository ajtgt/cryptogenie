import React, { useState, useEffect } from "react";

const Timez = () => {
  const [clock, setClock] = useState({ time: new Date() });

  useEffect(() => {
    setInterval(() => {
      setClock({ time: new Date() });
    }, 1);
  }, []);

  let minutes = clock.time.getMinutes();
  let seconds = 59 - clock.time.getSeconds();
  parseInt(minutes) === 30
    ? (minutes = 0)
    : minutes > 29
    ? (minutes = 59 - minutes)
    : (minutes = 29 - minutes);
  if (parseInt(minutes) === 30) {
    seconds = 0;
  }

  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  if (seconds < 10) {
    seconds = "0" + seconds.toString();
  }

  let next_prediction_time = minutes.toString() + " : " + seconds.toString();

  return (
    <>
      <b style={{ color: "#6237de" }}>{next_prediction_time}</b>
    </>
  );
};

export default Timez;
