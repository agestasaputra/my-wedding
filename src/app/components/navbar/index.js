import React from "react";
import './styles.scss';

const Navbar = ({ state, dispatch }) => {
  return (
    <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28" />
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
                <a className="navbar-item" href="https://bulma.io/">
                    Attendance
                </a>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
