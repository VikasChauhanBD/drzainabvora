import React, { useEffect } from "react";
import "./InstagramFeed.css";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const InstagramFeed = () => {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
      return;
    }

    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]',
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://www.instagram.com/embed.js";

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);
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
            src="https://www.instagram.com/p/DU8dwubDJnu/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Dr. Zainab Vora Instagram post"
          ></iframe>
        </div>

        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DUyV69Xk7Bv/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Dr. Zainab Vora Instagram post"
          ></iframe>
        </div>

        <div className="instagram-post">
          <iframe
            src="https://www.instagram.com/p/DUw6yfjE6vi/embed"
            width="100%"
            height="580"
            frameBorder="0"
            scrolling="no"
            allowtransparency="true"
            title="Dr. Zainab Vora Instagram post"
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
