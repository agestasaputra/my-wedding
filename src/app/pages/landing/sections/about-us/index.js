import React from "react";
import "./styles.scss";
// import Siskadptr from "app/assets/about-us/siskadptr-2.jpg";
// import AgestaSaputra from "app/assets/about-us/agesta-saputra-2.jpg";

import Slider from "react-slick";

const AboutUs = ({ dataNewArrival, location }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  return (
    <section className="container-about-us">
      <div className="columns columns-about-us-head m-0">
        <div className="column">
          <h1 className="columns-about-us-head__title">ABOUT US</h1>
          <hr />
        </div>
      </div>
      <div className="columns container-about-us-verses">
        <div className="column">
          <h1 className="container-about-us-verses__title">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </h1>
          <p className="container-about-us-verses__desc">
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

      {/* DESKTOP */}
      <div className="columns container-about-us-body columns-desktop m-0 is-justify-content-space-around mt-4">
        <div className="card-person mt-6">
          <div className="card-person__frame women mb-5">
            {/* <img src={Siskadptr} className="card-person__img" alt="name" /> */}
          </div>
          <h1 className="card-person__title">Siska Dwi Putri Yuliansyah</h1>
          <p className="card-person__desc">
            Daughter of Mr. Firmansyah & Mrs. Ratih Yuliastinah
          </p>
        </div>
        <div className="card-person mt-6">
          <div className="card-person__frame men mb-5">
            {/* <img src={AgestaSaputra} className="card-person__img" alt="name" /> */}
          </div>
          <h1 className="card-person__title">Agesta Budy Saputra</h1>
          <p className="card-person__desc">
            Son of Mr. Budi Widodo & Mrs. Yuli Sulistyaningsih
          </p>
        </div>
      </div>

      {/* MOBILE */}
      <div className="columns container-about-us-body columns-mobile">
        <Slider {...settings}>
          <div className="card-person mt-5">
            <div className="card-person__frame women mb-4">
              {/* <img
                src={Siskadptr}
                className="card-person__img"
                alt="name"
              /> */}
            </div>
            <h1 className="card-person__title">Siska Dwi Putri Yuliansyah</h1>
            <p className="card-person__desc">
              Daughter of Mr. Firmansyah & Mrs. Ratih Yuliastinah
            </p>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame men mb-4">
              {/* <img
                src={AgestaSaputra}
                className="card-person__img"
                alt="name"
              /> */}
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
