import React from "react";
import "./styles.scss";

const Navbar = ({ state, dispatch }) => {

  const menuOnClicked = (type) => {
    let element = '';

    switch (type) {
      case 'INVITATION':
          element = 'container-invitation';
          break;
      case 'ABOUT_US':
          element = 'container-about-us';
          break;
      case 'GALLERY':
          element = 'container-gallery';
          break;
      case 'LOCATION':
          element = 'container-location';
          break;
      default:
          break;
    }
    const dom = document.querySelector(`.${element}`);
    dom.scrollIntoView({ behavior: "smooth" });

  }

  return (
    <React.Fragment>
      {/* Navbar Desktop */}
      <nav className="navbar navbar-desktop is-transparent is-fixed-top is-black">
        <div className="navbar-brand">
          <span className="navbar-item">
            Siska & Agesta's Wedding
          </span>
          <div className="navbar-burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item" onClick={() => menuOnClicked('INVITATION')}>
              Invitation
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('ABOUT_US')}>
              About Us
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('GALLERY')}>
              Gallery
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('LOCATION')}>
              Location
            </span>
          </div>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav className="navbar navbar-mobile is-fixed-bottom is-black">
        <div className="menu">
          <i className="fa fa-home" />
          <h6 className="menu__title" onClick={() => menuOnClicked('INVITATION')}>
            Invitation
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-info-circle" />
          <h6 className="menu__title" onClick={() => menuOnClicked('ABOUT_US')}>
            About Us
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-photo" />
          <h6 className="menu__title" onClick={() => menuOnClicked('GALLERY')}>
            Gallery
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-map" />
          <h6 className="menu__title" onClick={() => menuOnClicked('LOCATION')}>
            Location
          </h6>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
