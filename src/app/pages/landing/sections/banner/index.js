import React from "react";
import "./styles.scss";


const Banner = ({ img }) => {
  return (
    <section className="hero container-banner">
        <div className="hero-body">
        <div className="container">
            <h1 className="title">
                AGESTA & SISKA
            </h1>
            <h2 className="subtitle">
                Sunday, 8th August 2021
            </h2>
        </div>
        </div>
    </section>
  );
};

export default Banner;
