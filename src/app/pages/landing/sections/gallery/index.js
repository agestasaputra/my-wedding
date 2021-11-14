import React from "react";
import "./styles.scss";
import Slider from "react-slick";
import Gallery2 from "app/assets/gallery/gallery-2.jpg";
import Gallery4 from "app/assets/gallery/gallery-4.jpg";
import Gallery6 from "app/assets/gallery/gallery-6.jpg";
import Gallery7 from "app/assets/gallery/gallery-7.jpg";
import Gallery8 from "app/assets/gallery/gallery-8.jpg";
import Gallery9 from "app/assets/gallery/gallery-9.jpg";
import Gallery10 from "app/assets/gallery/gallery-10.jpg";
import Gallery12 from "app/assets/gallery/gallery-12.jpg";
import Gallery14 from "app/assets/gallery/gallery-14.jpg";
import Gallery15 from "app/assets/gallery/gallery-15.jpg";
import Gallery16 from "app/assets/gallery/gallery-16.jpg";
import Gallery17 from "app/assets/gallery/gallery-17.jpg";

const Gallery = ({ dataNewArrival, location }) => {
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
    <section className="container-gallery">

      <div className="columns container-gallery-head m-0">
        <div className="column">
          <h1 className="container-gallery__title">
            GALLERY
          </h1>
          <hr className="hr-custom" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="columns container-gallery-body columns-desktop">

        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery14}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery4}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery2}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>

        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery7}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery6}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery8}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>

        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery9}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery12}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery10}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>

        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery16}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery15}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery17}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
      </div>


      {/* MOBILE */}
      <div className="columns container-gallery-body columns-mobile">
        <Slider {...settings}>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery14}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery4}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery2}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>

          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery7}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery6}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery8}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>

          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery9}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery12}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery10}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>

          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery16}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery15}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery17}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
