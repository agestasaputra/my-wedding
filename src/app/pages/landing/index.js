import React from "react";
import { Container } from "./styles";
import Banner from "./sections/banner";
import AboutUs from "./sections/about-us";
import Catalog from "./sections/catalog";
import Tagline from "./sections/tagline";

const Landing = ({ state, dispatch, location }) => {
  return (
    <Container>
      <Banner
        img={
          state.dataLandingPage.dataBanner && state.dataLandingPage.dataBanner
        }
      />
      <AboutUs
        dataNewArrival={state.dataLandingPage.dataNewArrival}
        location={location}
      />
      <Tagline img={state.dataLandingPage.dataTagline} />
      <Catalog dataCatalog={state.dataLandingPage.dataCatalog} />
    </Container>
  );
};

export default Landing;
