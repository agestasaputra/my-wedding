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
      <div className="columns columns-counter-body">
        <div className="column">
          <h1 className="columns-invitation-head__title">
            We're getting <b>Ready</b>
          </h1>
          <Countdown date={'2021-11-21T04:00:00.000Z'} renderer={renderer} />
          <h1 className="columns-invitation-head__quotes">
            Until We Become <br />
            Mr. & Mrs.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Counter;
