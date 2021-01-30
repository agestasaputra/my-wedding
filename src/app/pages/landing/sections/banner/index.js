import React from "react";
import "./styles.scss";

const Banner = ({ img, location }) => {
  const [guest, setGuest] = React.useState("");

  React.useEffect(() => {
    // assign guest
    const tmp = location.search
      ? location.search.slice(2).replace(/[+]/g, " ")
      : "";
    setGuest(tmp);
  }, []);

  return (
    <section className="hero container-banner">
      <div className="hero-body">
        <div className="container">
          <div className="section-invitation">
            <h1 className="title">
              Dear <span className="guest">{guest}</span>,
            </h1>
            <h2 className="subtitle">
              We would like you to invite you to our special moment.
            </h2>
          </div>
          <div className="section-couple">
            <h1 className="title">SISKA & AGESTA</h1>
            <h2 className="subtitle">Sunday, 8th August 2021</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
