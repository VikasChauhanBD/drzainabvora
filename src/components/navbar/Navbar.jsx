import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/ZV-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowMegaMenu(false);
  };

  const toggleMegaMenu = () => {
    setShowMegaMenu(!showMegaMenu);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={Logo} alt="website logo" />
        </NavLink>
      </div>
      <nav className={showNav ? "mobile-nav" : "web-nav"}>
        <NavLink to="/" onClick={handleCloseNav}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleCloseNav}>
          About
        </NavLink>
        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowMegaMenu(true)}
          onMouseLeave={() => !showNav && setShowMegaMenu(false)}
        >
          <button
            className="dropdown-trigger"
            onClick={() => showNav && toggleMegaMenu()}
          >
            Online Programs
            <IoIosArrowDown
              className={`arrow-icon ${showMegaMenu ? "rotate" : ""}`}
            />
          </button>
          {showMegaMenu && (
            <div className="mega-menu">
              <div className="mega-menu-content">
                <NavLink
                  to="/online-programs/btr"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image btr-bg">
                      <span className="card-badge">Online BTR</span>
                    </div>
                    <h3>Belief Toh Rakho</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </NavLink>
                <NavLink
                  to="/conceptual-radiology"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image cr-bg">
                      <span className="card-badge">CR</span>
                    </div>
                    <h3>Conceptual Radiology</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                      dapibus leo.
                    </p>
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </div>
        <NavLink to="/offline-events" onClick={handleCloseNav}>
          Offline Events
        </NavLink>
        <NavLink to="/students" onClick={handleCloseNav}>
          Students
        </NavLink>
      </nav>
      <div className="hamburger">
        <button className="hamburger-btn" onClick={handleButtonToggle}>
          <GiHamburgerMenu />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
