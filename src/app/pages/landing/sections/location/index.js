import React from "react";
import "./styles.scss";

const Location = ({ dataNewArrival, location }) => {
  return (
    <section className="container-location py-6">
      <div className="columns m-0">
        <div className="column">
          <h1 className="title">LOCATION</h1>
          <hr />
        </div>
      </div>
      <div className="columns m-0 is-justify-content-space-around mt-6 mt-6">
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header">
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
            <div className="card-location__header">
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
            <div className="card-location__header">
              <i className="fa fa-home fa-5x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">VENUE</h1>
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
    </section>
  );
};

export default Location;
