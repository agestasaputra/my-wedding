import React from "react";
import "./styles.scss";
import Slider from "react-slick";
import "ol/ol.css";
import { Map, View } from "ol";
import VectorSource from "ol/source/Vector";
import {
  Tile as TileLayer,
  Vector as VectorLayer,
  Group as GroupLayer,
} from "ol/layer";
import OSM from "ol/source/OSM";
import XYZ from "ol/source/XYZ";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { Icon, Style } from "ol/style";
import Marker from "app/assets/location/marker.png";

const Location = ({ dataNewArrival, location }) => {
  const [dataMap] = React.useState({
    coordinat: [11892691.181819074, -701883.51454213],
    zoom: 18,
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  React.useEffect(() => {
    const map = new Map({
      view: new View({
        center: dataMap.coordinat,
        zoom: dataMap.zoom,
      }),
      target: "map",
    });

    const openStreetMapStandard = new TileLayer({
      source: new OSM(),
      visible: true,
      title: "OSMStandard",
    });

    const openStreetMapHumanitarian = new TileLayer({
      source: new OSM({
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      }),
      visible: false,
      title: "OSMHumanitarian",
    });

    const stamenTerrain = new TileLayer({
      source: new XYZ({
        url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
        attributions:
          'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
      }),
      visible: false,
      title: "StamenTerrain",
    });

    const markerStyle = new Feature({
      geometry: new Point([11892689.973203452, -701863.1325568107]),
    });

    markerStyle.setStyle(
      new Style({
        image: new Icon({
          // color: "red",
          // crossOrigin: "anonymous",
          // For Internet Explorer 11
          // imgSize: [20, 20],
          scale: 0.07,
          src: Marker,
        }),
      })
    );

    const marker = new VectorSource({
      features: [markerStyle],
    });

    const markerLayer = new VectorLayer({
      source: marker,
    });

    // Layer Group
    const baseLayerGroup = new GroupLayer({
      layers: [
        openStreetMapStandard,
        openStreetMapHumanitarian,
        stamenTerrain,
        markerLayer,
      ],
    });
    map.addLayer(baseLayerGroup);

    // map.on("click", (e) => {
    //   console.log("cek e:", e);
    // });
  }, [dataMap]);

  return (
    <section className="container-location">
      <div className="columns container-location-head m-0">
        <div className="column">
          <h1 className="container-location__title">LOCATION</h1>
          <hr className="hr-custom" />
        </div>
      </div>
      <div className="columns container-location-body columns-desktop m-0 is-justify-content-space-around mt-6 mt-6">
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-home fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">VENUE</h1>
              <p className="card-location__body--desc">
                Masjid Jami' Al-Falaah
              </p>
              <p className="card-location__body--desc">
                Jl. Aup Bar RT 03/ RW 10 Pasar Minggu
              </p>
              <p className="card-location__body--desc">
                Pasar Minggu, Jakarta Selatan, DKI Jakarta 12540
              </p>
            </div>
          </div>
        </div>
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-calendar-check-o fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">DATE</h1>
              <p className="card-location__body--desc">
                Sunday, 21 November 2021
              </p>
            </div>
          </div>
        </div>
        <div className="column d-flex is-justify-content-center">
          <div className="card-location">
            <div className="card-location__header mb-20">
              <i className="fa fa-clock-o fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">TIME</h1>
              <p className="card-location__body--desc">
                  11.00 WIB - 16.00 WIB
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="container-location-body columns-mobile mt-4">
        <Slider {...settings}>
          <div className="card-location">
            <div className="card-location__header">
              <i className="fa fa-home fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">VENUE</h1>
              <p className="card-location__body--desc">
                Masjid Jami' Al-Falaah
              </p>
              <p className="card-location__body--desc">
                Jl. Aup Bar RT 03/ RW 10 Pasar Minggu
              </p>
              <p className="card-location__body--desc">
                Pasar Minggu, Jakarta Selatan, DKI Jakarta 12540
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
                Sunday, 21 November 2021
              </p>
            </div>
          </div>
          <div className="card-location">
            <div className="card-location__header">
              <i className="fa fa-clock-o fa-4x" />
            </div>
            <div className="card-location__body">
              <h1 className="card-location__body--title">TIME</h1>
                <p className="card-location__body--desc">
                  11.00 WIB - 16.00 WIB
                </p>
            </div>
          </div>
        </Slider>
      </div>

      {/* <div className="container-map" id="map" /> */}
      <div className="wrapper-map" align="center">
      <iframe
        className="iframe-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.780422446261!2d106.83168891476949!3d-6.292563395445695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f20ec1986b2d%3A0x69669e1765becf43!2sMasjid%20Jami&#39;%20Al-Falaah!5e0!3m2!1sid!2sid!4v1636855490879!5m2!1sid!2sid"
        width="600"
        height="450"
        loading="lazy"
      />
      </div>
    </section>
  );
};

export default Location;
