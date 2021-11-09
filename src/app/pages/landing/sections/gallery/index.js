import React from "react";
import "./styles.scss";
import PreweddingImg from "app/assets/banner/prewedding-1.jpeg";
import Slider from "react-slick";
import Img1 from "app/assets/DSC06867.JPG";

const Gallery = ({ dataNewArrival, location }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="columns container-gallery-body columns-desktop">
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
        <div>
          <img src={Img1} alt="img-1" />
        </div>
      </div>
      <div className="columns container-gallery-body columns-mobile">
        <Slider {...settings}>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={PreweddingImg}
                className="card-person__img"
                alt="name"
              />
            </div>
          </div>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={PreweddingImg}
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
