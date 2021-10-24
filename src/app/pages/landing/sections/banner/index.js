import React from "react";
import "./styles.scss";

const Banner = ({ img, location }) => {
  const [guest, setGuest] = React.useState("");

  React.useEffect(() => {
    // assign guest
    // format: http://localhost:3000/my-wedding?to=Agesta+dan+Partner
    const tmp = location.search
      ? location.search.split('=')[1].replace(/[+]/g, " ")
      : "";
    setGuest(tmp);
  }, [location]);

  return (
    <section className="hero container-banner">
      <div className="hero-body">
        <div className="container">
          {guest && (
            <div className="section-invitation">
              <h1 className="title">
                Dear <span className="guest">{guest}</span>,
              </h1>
              <h2 className="subtitle">
                We would like you to invite you to our special moment.
              </h2>
            </div>
          )}
          <div className="section-couple">
            <h1 className="title">SISKA & AGESTA</h1>
            <h2 className="subtitle">Sunday, 21 November 2021</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
