import React from "react";
import "./styles.scss";

const Verses = ({ dataNewArrival, location }) => {
  return (
    <section className="container-verses">
      <div className="columns columns-verses">
        <div className="column">
          <h1 className="columns-verses__title">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </h1>
          <p className="columns-verses__desc">
            ❝ And of His signs is that He created for you from yourselves mates
            that you may find tranquility in them; and He placed between you
            affection and mercy. Indeed in that are signs for a people who give
            thought. ❞
            <br />
            <br />
            (Ar-Rum: 21)
          </p>
        </div>
      </div>
      {/* <div className="columns columns-countdown m-0">
        <div className="column">
          <Countdown date={Date.now() + 5000000000} renderer={renderer} />
        </div>
      </div> */}
    </section>
  );
};

export default Verses;
