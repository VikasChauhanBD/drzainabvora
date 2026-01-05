import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/ZV-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [showBTRMenu, setShowBTRMenu] = useState(false);
  const [showCRMenu, setShowCRMenu] = useState(false);
  const navigate = useNavigate();

  const handleButtonToggle = () => {
    setShowNav(!showNav);
  };

  const handleCloseNav = () => {
    setShowNav(false);
    setShowBTRMenu(false);
    setShowCRMenu(false);
  };

  const handleBTRClick = () => {
    // Navigate to BTR page
    navigate("/btr");
    handleCloseNav();
  };

  const handleBTRArrowClick = (e) => {
    // Stop propagation to prevent triggering handleBTRClick
    e.stopPropagation();
    setShowBTRMenu(!showBTRMenu);
  };

  const handleCRClick = () => {
    // Navigate to Conceptual Radiology page
    navigate("/conceptual-radiology");
    handleCloseNav();
  };

  const handleCRArrowClick = (e) => {
    // Stop propagation to prevent triggering handleCRClick
    e.stopPropagation();
    setShowCRMenu(!showCRMenu);
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
          About Dr. ZV
        </NavLink>

        {/* BTR with dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowBTRMenu(true)}
          onMouseLeave={() => !showNav && setShowBTRMenu(false)}
        >
          <button className="dropdown-trigger" onClick={handleBTRClick}>
            <span className="dropdown-text">BTR</span>
            <IoIosArrowDown
              className={`arrow-icon ${showBTRMenu ? "rotate" : ""}`}
              onClick={handleBTRArrowClick}
            />
          </button>

          {showBTRMenu && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowBTRMenu(true)}
              onMouseLeave={() => !showNav && setShowBTRMenu(false)}
            >
              <NavLink
                to="/online-btr"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Online BTR
              </NavLink>
              <NavLink
                to="/offline-btr"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                Offline BTR
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/bootcamp" onClick={handleCloseNav}>
          Bootcamp
        </NavLink>

        {/* Conceptual Radiology with CRISP dropdown */}
        <div
          className="dropdown-container"
          onMouseEnter={() => !showNav && setShowCRMenu(true)}
          onMouseLeave={() => !showNav && setShowCRMenu(false)}
        >
          <button className="dropdown-trigger" onClick={handleCRClick}>
            <span className="dropdown-text">Conceptual Radiology</span>
            <IoIosArrowDown
              className={`arrow-icon ${showCRMenu ? "rotate" : ""}`}
              onClick={handleCRArrowClick}
            />
          </button>

          {showCRMenu && (
            <div
              className="dropdown-menu level-1"
              onMouseEnter={() => !showNav && setShowCRMenu(true)}
              onMouseLeave={() => !showNav && setShowCRMenu(false)}
            >
              <NavLink
                to="/crisp"
                onClick={handleCloseNav}
                className="dropdown-link"
              >
                CRISP
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/students" onClick={handleCloseNav}>
          Students
        </NavLink>
        <NavLink to="/gallery" onClick={handleCloseNav}>
          Gallery
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
