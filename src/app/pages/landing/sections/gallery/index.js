import React from "react";
import "./styles.scss";
// import PreweddingImg from "app/assets/banner/prewedding-1.jpeg";
import Slider from "react-slick";
// import Prewed1 from "app/assets/gallery/prewed-1.jpg";
import Gallery1 from "app/assets/gallery/gallery-1.jpg";
import Gallery2 from "app/assets/gallery/gallery-2.jpg";
import Gallery3 from "app/assets/gallery/gallery-3.jpg";
import Gallery4 from "app/assets/gallery/gallery-4.jpg";
import Gallery5 from "app/assets/gallery/gallery-5.jpg";
import Gallery6 from "app/assets/gallery/gallery-6.jpg";
import Gallery7 from "app/assets/gallery/gallery-7.jpg";
import Gallery8 from "app/assets/gallery/gallery-8.jpg";
import Gallery9 from "app/assets/gallery/gallery-9.jpg";
// import Gallery10 from "app/assets/gallery/gallery-10.jpg";
// import Gallery11 from "app/assets/gallery/gallery-11.jpg";
// import Gallery12 from "app/assets/gallery/gallery-12.jpg";
import Gallery13 from "app/assets/gallery/gallery-13.jpg";
import Gallery14 from "app/assets/gallery/gallery-14.jpg";

const Gallery = ({ dataNewArrival, location }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
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
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery13}
              className="card-person__img"
              alt="name"
            />
          </div>
        </div>
        <div className="card-person mt-5">
          <div className="card-person__frame mb-4">
            <img
              src={Gallery3}
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
              src={Gallery4}
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
              src={Gallery5}
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
              src={Gallery14}
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
        {/* <div className="card-person mt-5">
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
              src={Gallery11}
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
        </div> */}

        {/* <div>
          <img src={Gallery1} alt="gallery-1" />
        </div>
        <div>
          <img src={Gallery2} alt="gallery-2" />
        </div>
        <div>
          <img src={Gallery3} alt="gallery-3" />
        </div>
        <div>
          <img src={Gallery4} alt="gallery-4" />
        </div>
        <div>
          <img src={Gallery5} alt="gallery-5" />
        </div>
        <div>
          <img src={Gallery6} alt="gallery-6" />
        </div>
        <div>
          <img src={Gallery7} alt="gallery-7" />
        </div>
        <div>
          <img src={Gallery8} alt="gallery-8" />
        </div>
        <div>
          <img src={Gallery9} alt="gallery-9" />
        </div>
        <div>
          <img src={Gallery9} alt="gallery-10" />
        </div>
        <div>
          <img src={Gallery9} alt="gallery-11" />
        </div>
        <div>
          <img src={Gallery9} alt="gallery-12" />
        </div> */}
      </div>

      <div className="columns container-gallery-body columns-mobile">
        <Slider {...settings}>
          <div className="card-person mt-5">
            <div className="card-person__frame mb-4">
              <img
                src={Gallery1}
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
                src={Gallery3}
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
                src={Gallery5}
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
                src={Gallery7}
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
          {/* <div className="card-person mt-5">
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
                src={Gallery11}
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
          </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
