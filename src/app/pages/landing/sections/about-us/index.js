import React from "react";
import "./styles.scss";
import PreweddingImg from "app/assets/banner/prewedding-1.jpeg";
import Slider from "react-slick";

const AboutUs = ({ dataNewArrival, location }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="container-about-us">
      <div className="columns m-0">
        <div className="column">
          <h1 className="container-about-us__title">ABOUT US</h1>
          <hr />
        </div>
      </div>
      <div className="columns columns-desktop m-0 is-justify-content-space-around mt-4">
        <div className="card-person mt-6">
          <div className="card-person__frame mb-5">
            <img src={PreweddingImg} className="card-person__img" alt="name" />
          </div>
          <h1 className="card-person__title">Siska Dwi Putri Yuliansyah</h1>
          <p className="card-person__desc">
            Daughter of Mr. Fimansyah & Mrs. Ratih Yuliastinah
          </p>
        </div>
        <div className="card-person mt-6">
          <div className="card-person__frame mb-5">
            <img src={PreweddingImg} className="card-person__img" alt="name" />
          </div>
          <h1 className="card-person__title">Agesta Budy Saputra</h1>
          <p className="card-person__desc">
            Son of Mr. Budi Widodo & Mrs. Yuli Sulistyaningsih
          </p>
        </div>
      </div>
      <div className="columns-mobile">
        <Slider {...settings}>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={PreweddingImg}
                className="card-person__img"
                alt="name"
              />
            </div>
            <h1 className="card-person__title">Siska Dwi Putri Yuliansyah</h1>
            <p className="card-person__desc">
              Daughter of Mr. Fimansyah & Mrs. Ratih Yuliastinah
            </p>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={PreweddingImg}
                className="card-person__img"
                alt="name"
              />
            </div>
            <h1 className="card-person__title">Agesta Budy Saputra</h1>
            <p className="card-person__desc">
              Son of Mr. Budi Widodo & Mrs. Yuli Sulistyaningsih
            </p>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AboutUs;
