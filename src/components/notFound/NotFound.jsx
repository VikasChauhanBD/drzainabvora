import React from "react";
import "./NotFound.css";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found-page">
      <div className="not-found-page-container">
        <div className="four-zero-four">
          <h1>404</h1>
        </div>

        <div className="not-found-page-content">
          <h3>Look like you're lost</h3>

          <p>the page you are looking for not available!</p>

          <NavLink to="/" className="not-found-page-btn">
            Go to Home
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
