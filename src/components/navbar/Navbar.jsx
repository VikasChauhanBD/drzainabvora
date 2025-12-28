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

  const handleBTRClick = (e) => {
    if (showNav) {
      // Mobile: toggle dropdown
      e.stopPropagation();
      setShowBTRMenu(!showBTRMenu);
    } else {
      // Desktop: navigate to BTR page
      navigate("/btr");
      handleCloseNav();
    }
  };

  const handleCRClick = (e) => {
    if (showNav) {
      // Mobile: toggle dropdown
      e.stopPropagation();
      setShowCRMenu(!showCRMenu);
    } else {
      // Desktop: navigate to Conceptual Radiology page
      navigate("/conceptual-radiology");
      handleCloseNav();
    }
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
            BTR
            <IoIosArrowDown
              className={`arrow-icon ${showBTRMenu ? "rotate" : ""}`}
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
            Conceptual Radiology
            <IoIosArrowDown
              className={`arrow-icon ${showCRMenu ? "rotate" : ""}`}
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
