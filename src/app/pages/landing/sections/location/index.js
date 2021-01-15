import React from "react";
import "./styles.scss";
import Slider from "react-slick";

const Location = ({ dataNewArrival, location }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="container-location">
      <div className="columns m-0">
        <div className="column">
          <h1 className="container-location__title">LOCATION</h1>
          <hr class="hr-custom" />
        </div>
      </div>
      <div className="columns columns-desktop m-0 is-justify-content-space-around mt-6 mt-6">
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-home fa-5x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">VENUE</h1>
              <p className="card-location__body--desc">
                Sudirman Grand Ballroom
              </p>
              <p className="card-location__body--desc">
                Jl. Jend. Sudirman No.620, Dungus Cariang, Andir, Kota
              </p>
              <p className="card-location__body--desc">
                Bandung, Jawa Barat 40183
              </p>
            </div>
          </div>
        </div>
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-calendar-check-o fa-5x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">DATE</h1>
              <p className="card-location__body--desc">
                Sunday, 8th August 2021
              </p>
            </div>
          </div>
        </div>
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-clock-o fa-5x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">TIME</h1>
              <ul>
                <li>
                  <p className="card-location__body--desc">
                    Ceremony: 10.30 WIB - 11.30 WIB
                  </p>
                </li>
                <li>
                  <p className="card-location__body--desc">
                    Reception: 12.30 WIB - 14.30 WIB
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="columns-mobile mt-4">
        <Slider {...settings}>
          <div className="card-location">
            <div className="card-location__header">
              <i className="fa fa-home fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">VENUE</h1>
              <p className="card-location__body--desc">
                Sudirman Grand Ballroom
              </p>
              <p className="card-location__body--desc">
                Jl. Jend. Sudirman No.620, Dungus Cariang, Andir, Kota
              </p>
              <p className="card-location__body--desc">
                Bandung, Jawa Barat 40183
              </p>
            </div>
          </div>
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-calendar-check-o fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">DATE</h1>
              <p className="card-location__body--desc">
                Sunday, 8th August 2021
              </p>
            </div>
          </div>
          <div className="card-location">
            <div className="card-location__header">
              <i className="fa fa-clock-o fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">TIME</h1>
              <ul>
                <li>
                  <p className="card-location__body--desc">
                    Ceremony: 10.30 WIB - 11.30 WIB
                  </p>
                </li>
                <li>
                  <p className="card-location__body--desc">
                    Reception: 12.30 WIB - 14.30 WIB
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Location;
