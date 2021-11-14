import React from "react";
import "./styles.scss";

const Navbar = ({ state, dispatch }) => {

  const toggleBurgerMenu = () => {
    document.querySelector('.navbar-menu--tablet').classList.toggle('is-active');
  }

  const menuOnClicked = (type, fromTablet) => {
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
    fromTablet && toggleBurgerMenu();
    const dom = document.querySelector(`.${element}`);
    dom.scrollIntoView({ behavior: "smooth" });

  }

  return (
    <React.Fragment>
      {/* Navbar Desktop */}
      <nav className="navbar navbar-desktop is-transparent is-fixed-top is-black">

        <div className="section-top">
          <div className="navbar-brand">
            <span className="navbar-item">
              Siska & Agesta's Wedding
            </span>
          </div>

          <div className="navbar-burger" data-target="navbarMenu" onClick={toggleBurgerMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="navbar-menu">
            <div className="navbar-end">
              <span className="navbar-item" onClick={() => menuOnClicked('INVITATION', false)}>
                Invitation
              </span>
              <span className="navbar-item" onClick={() => menuOnClicked('ABOUT_US', false)}>
                About Us
              </span>
              <span className="navbar-item" onClick={() => menuOnClicked('GALLERY', false)}>
                Gallery
              </span>
              <span className="navbar-item" onClick={() => menuOnClicked('LOCATION', false)}>
                Location
              </span>
            </div>
          </div>
        </div>

        <div className="section-bottom">
          <div className="navbar-menu navbar-menu--tablet">
            <span className="navbar-item" onClick={() => menuOnClicked('INVITATION', true)}>
              Invitation
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('ABOUT_US', true)}>
              About Us
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('GALLERY', true)}>
              Gallery
            </span>
            <span className="navbar-item" onClick={() => menuOnClicked('LOCATION', true)}>
              Location
            </span>
          </div>
        </div>

      </nav>

      {/* Navbar Mobile */}
      <nav className="navbar navbar-mobile is-fixed-bottom is-black">
        <div className="menu" onClick={() => menuOnClicked('INVITATION', false)}>
          <i className="fa fa-home" />
          <h6 className="menu__title">
            Invitation
          </h6>
        </div>
        <div className="menu" onClick={() => menuOnClicked('ABOUT_US', false)}>
          <i className="fa fa-info-circle" />
          <h6 className="menu__title">
            About Us
          </h6>
        </div>
        <div className="menu" onClick={() => menuOnClicked('GALLERY', false)}>
          <i className="fa fa-photo" />
          <h6 className="menu__title">
            Gallery
          </h6>
        </div>
        <div className="menu" onClick={() => menuOnClicked('LOCATION', false)}>
          <i className="fa fa-map" />
          <h6 className="menu__title">
            Location
          </h6>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
