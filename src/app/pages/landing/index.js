import React from "react";
import Banner from "./sections/banner";
import Invitation from "./sections/invitation";
import Counter from "./sections/counter";
// import Verses from "./sections/verses";
import AboutUs from "./sections/about-us";
import Location from "./sections/location";
import "./styles.scss";
// import Catalog from "./sections/catalog";
// import Tagline from "./sections/tagline";

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
      {/* <Verses
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      /> */}
      <AboutUs
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Location />
      {/* <Tagline img={state.dataLandingPage.dataTagline} />
      <Catalog dataCatalog={state.dataLandingPage.dataCatalog} /> */}
    </div>
  );
};

export default Landing;
