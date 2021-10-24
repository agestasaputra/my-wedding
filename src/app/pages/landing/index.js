import React from "react";
import Banner from "./sections/banner";
import Invitation from "./sections/invitation";
import Counter from "./sections/counter";
import AboutUs from "./sections/about-us";
import Gallery from "./sections/gallery";
import Location from "./sections/location";
import "./styles.scss";

const Landing = ({ state, dispatch, location }) => {
  return (
    <div className="container-landing">
      <Banner
        img={
          state.dataLandingPage.dataBanner && state.dataLandingPage.dataBanner
        }
        location={location}
      />
      <Invitation
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Counter
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <AboutUs
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Gallery
        dataNewArrival={state.dataLandingPage.dataNewArrival}
      />
      <Location />
    </div>
  );
};

export default Landing;
