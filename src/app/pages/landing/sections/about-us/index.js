import React from "react";
import "./styles.scss";
import PreweddingImg from "app/assets/banner/prewedding-1.jpeg";

const AboutUs = ({ dataNewArrival, location }) => {
  return (
    <section className="container-about-us py-6">
      <div className="columns m-0">
        <div className="column">
          <h1 className="title">ABOUT US</h1>
          <hr />
        </div>
      </div>
      <div className="columns m-0 is-justify-content-space-around mt-6 mt-6">
        <div className="card-person mt-6">
          <div className="card-person__frame mb-4">
            <img src={PreweddingImg} className="card-person__img" alt="name" />
          </div>
          <h1 className="card-person__title">Agesta Budy Saputra</h1>
          <p className="card-person__desc">
            Putra dari Bpk. Budi Widodo & Ibu. Yuli Sulistyaningsih
          </p>
        </div>
        <div className="card-person mt-6">
          <div className="card-person__frame mb-4">
            <img src={PreweddingImg} className="card-person__img" alt="name" />
          </div>
          <h1 className="card-person__title">Siska Dwi Putri Yuliansyah</h1>
          <p className="card-person__desc">
            Putri dari Bpk. Fimansyah & Ibu. Ratih Yuliastinah
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
