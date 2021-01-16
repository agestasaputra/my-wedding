import React from "react";
import "./styles.scss";
import Countdown from "react-countdown";
import CustomCountdown from "app/components/custom-countdown";

const Counter = ({ dataNewArrival, location }) => {
  // Renderer callback with condition
  const renderer = (data) => {
    if (data.completed) {
      // Render a completed state
      return <h1>Completed!</h1>;
    } else {
      // Render a countdown
      return <CustomCountdown data={data} />;
    }
  };

  return (
    <section className="container-counter">
      <h1 className="container-counter__title">
        We're getting <b>Ready</b>
      </h1>
      <Countdown date={Date.now() + 5000000000} renderer={renderer} />
      <h1 className="container-counter__quotes">
        Until We Become <br />
        Mr. & Mrs.
      </h1>
    </section>
  );
};

export default Counter;
