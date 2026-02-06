import React, { useEffect } from "react";
import "./InstagramFeed.css";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const InstagramFeed = () => {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    document.body.appendChild(script);

    // Process embeds after script loads
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="instagram-feed-container">
      <div className="instagram-feed-header">
        <div className="instagram-header-title-section">
          <FaInstagram className="instagram-header-icon" />
          <h2 className="instagram-header-title">Dr. Zainab Vora</h2>
        </div>
        <p className="instagram-header-subtitle">Latest Instagram Posts</p>
      </div>

      <div className="instagram-grid">
        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DUX0dXIkULC/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>

        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DUVgPzuD0Ek/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>

        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DUVR2MUE1Lz/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
          ></iframe>
        </div>
      </div>

      <div className="instagram-follow-section">
        <NavLink to="https://www.instagram.com/drzainabvora" target="_blank">
          Follow Us on Instagram
        </NavLink>
      </div>
    </div>
  );
};

export default InstagramFeed;
