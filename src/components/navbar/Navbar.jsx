import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/ZV-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showOnlineMegaMenu, setShowOnlineMegaMenu] = useState(false);
  const [showOfflineMegaMenu, setShowOfflineMegaMenu] = useState(false);

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowOnlineMegaMenu(false);
    setShowOfflineMegaMenu(false);
  };

  const toggleOnlineMegaMenu = () => {
    setShowOnlineMegaMenu(!showOnlineMegaMenu);
  };

  const toggleOfflineMegaMenu = () => {
    setShowOfflineMegaMenu(!showOfflineMegaMenu);
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
          onMouseEnter={() => !showNav && setShowOnlineMegaMenu(true)}
          onMouseLeave={() => !showNav && setShowOnlineMegaMenu(false)}
        >
          <button
            className="dropdown-trigger"
            onClick={() => showNav && toggleOnlineMegaMenu()}
          >
            Online Programs
            <IoIosArrowDown
              className={`arrow-icon ${showOnlineMegaMenu ? "rotate" : ""}`}
            />
          </button>
          {showOnlineMegaMenu && (
            <div className="mega-menu">
              <div className="mega-menu-content">
                <NavLink
                  to="/online-btr"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image btr-bg">
                      <span className="card-badge">Online BTR</span>
                    </div>
                    <h3>Belief Toh Rakho</h3>
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
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </div>

        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowOfflineMegaMenu(true)}
          onMouseLeave={() => !showNav && setShowOfflineMegaMenu(false)}
        >
          <button
            className="dropdown-trigger"
            onClick={() => showNav && toggleOfflineMegaMenu()}
          >
            Offline Events
            <IoIosArrowDown
              className={`arrow-icon ${showOfflineMegaMenu ? "rotate" : ""}`}
            />
          </button>
          {showOfflineMegaMenu && (
            <div className="mega-menu-2">
              <div className="mega-menu-content">
                <NavLink
                  to="/neet-pg-bootcamp"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image btr-bg">
                      <span className="card-badge">Offline BTR</span>
                    </div>
                    <h3>NEET PG Bootcamp</h3>
                  </div>
                </NavLink>
                <NavLink
                  to="/btr-3-4-days"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image btr-bg">
                      <span className="card-badge">BTR (3-4 Days)</span>
                    </div>
                    <h3>BTR (3-4 Days) Program</h3>
                  </div>
                </NavLink>
                <NavLink
                  to="/crisp"
                  onClick={handleCloseNav}
                  className="mega-menu-item"
                >
                  <div className="mega-menu-card">
                    <div className="card-image cr-bg">
                      <span className="card-badge">CRISP</span>
                    </div>
                    <h3>Conceptual Radiology Imaging Skills Program</h3>
                  </div>
                </NavLink>
              </div>
            </div>
          )}
        </div>

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
