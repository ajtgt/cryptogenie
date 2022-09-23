import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date(),
      });
    }, 1);
  }

  render() {
    // console.log("timer");
    var minutes = this.state.time.getMinutes();
    var seconds = 59 - this.state.time.getSeconds();
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

    // var time_start = "09 : 30 AM"
    // var time_end = "10: 00 AM"
    // let icons_img = uptrend
    var next_prediction_time = minutes.toString() + " : " + seconds.toString();
    return (
      <>
        <b>{next_prediction_time}</b>
      </>
    );
  }
}

export default Timer;
