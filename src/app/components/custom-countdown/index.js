import React from "react";
import "./styles.scss";

const CustomCountdown = ({ data }) => {
  return (
    <React.Fragment>
      <hr className="hr-countdown top d-none" />
      <div className="container-countdown">
        <div className="days">
          <div className="days__counter">{data.days}</div>
          <div className="days__desc">Days</div>
        </div>
        <div className="hours">
          <div className="hours__counter">{data.hours}</div>
          <div className="hours__desc">Hours</div>
        </div>
        <div className="minutes">
          <div className="minutes__counter">{data.minutes}</div>
          <div className="minutes__desc">Minutes</div>
        </div>
        <div className="seconds">
          <div className="seconds__counter">{data.seconds}</div>
          <div className="seconds__desc">Seconds</div>
        </div>
      </div>
      <hr className="hr-countdown bottom d-none" />
    </React.Fragment>
  );
};

export default CustomCountdown;
