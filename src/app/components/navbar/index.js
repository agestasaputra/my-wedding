import React from "react";
import "./styles.scss";

const Navbar = ({ state, dispatch }) => {
  return (
    <React.Fragment>
      {/* Navbar Desktop */}
      <nav className="navbar navbar-desktop is-transparent is-fixed-top is-black">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            Siska & Agesta's Wedding
          </a>
          <div className="navbar-burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarMenu" className="navbar-menu">
          <div className="navbar-end">
            <a className="navbar-item" href="https://bulma.io/">
              Home
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              Information
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              Gallery
            </a>
            <a className="navbar-item" href="https://bulma.io/">
              Story
            </a>
            {/* <a className="navbar-item" href="https://bulma.io/">
              Attendance
            </a> */}
          </div>
        </div>
      </nav>

      {/* Navbar Mobile */}
      <nav className="navbar navbar-mobile is-fixed-bottom is-black">
        <div className="menu">
          <i className="fa fa-home" />
          <h6 className="menu__title" href="https://bulma.io/">
            Home
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-info-circle" />
          <h6 className="menu__title" href="https://bulma.io/">
            Info
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-photo" />
          <h6 className="menu__title" href="https://bulma.io/">
            Gallery
          </h6>
        </div>
        <div className="menu">
          <i className="fa fa-history" />
          <h6 className="menu__title" href="https://bulma.io/">
            Story
          </h6>
        </div>
        {/* <div className="menu">
          <i className="fa fa-home fa-2x" />
          <h3 className="menu__title" href="https://bulma.io/">
            Attendace
          </h3>
        </div> */}
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
