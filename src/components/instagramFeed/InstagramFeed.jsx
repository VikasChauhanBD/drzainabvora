import { useState, useEffect } from "react";
import { Instagram, Calendar, ExternalLink, RefreshCw } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import "./InstagramFeed.css";
import { NavLink } from "react-router-dom";

function InstagramFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RSS_FEED_URL = "https://rss.app/feeds/G3vZxMus56nqvWwu.xml";

  // CORS proxy to bypass restrictions during development
  const CORS_PROXY = "https://api.allorigins.win/raw?url=";

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  const parseXMLFeed = (xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    const items = xmlDoc.querySelectorAll("item");
    const posts = [];

    items.forEach((item) => {
      const title = item.querySelector("title")?.textContent || "";
      const link = item.querySelector("link")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const description = item.querySelector("description")?.textContent || "";

      // Get image from media:content tag
      let imageUrl = null;

      // Try different selectors for media content
      const mediaContent =
        item.getElementsByTagName("media:content")[0] ||
        item.querySelector('content[medium="image"]') ||
        item.querySelector('[medium="image"]');

      if (mediaContent) {
        imageUrl = mediaContent.getAttribute("url");
      }

      // Fallback: extract from description HTML
      if (!imageUrl && description) {
        const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      // Clean description text
      let cleanDescription = "";
      if (description) {
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = description;
        cleanDescription = tempDiv.textContent || tempDiv.innerText || "";
      }

      posts.push({
        title: title.replace(/\[CDATA\[|\]\]/g, "").trim(),
        link,
        pubDate,
        imageUrl,
        originalImageUrl: imageUrl, // Keep original for fallback
        description: cleanDescription.trim(),
      });
    });

    return posts;
  };

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch RSS feed with CORS proxy
      const response = await fetch(
        CORS_PROXY + encodeURIComponent(RSS_FEED_URL)
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Instagram feed");
      }

      const xmlText = await response.text();
      const parsedPosts = parseXMLFeed(xmlText);

      if (parsedPosts.length > 0) {
        setPosts(parsedPosts);
      } else {
        throw new Error("No posts found in feed");
      }
    } catch (err) {
      setError(err.message);
      console.error("Error fetching Instagram posts:", err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const truncateText = (text, maxLength = 150) => {
    if (!text) return "";
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  // Handle image error with proxy
  const handleImageError = (e, post) => {
    console.error("Image failed to load:", post.imageUrl);

    // Try with CORS proxy if not already using it
    if (!post.imageUrl.includes("allorigins.win") && post.originalImageUrl) {
      e.target.src = CORS_PROXY + encodeURIComponent(post.originalImageUrl);
      post.imageUrl = CORS_PROXY + encodeURIComponent(post.originalImageUrl);
    } else {
      // If proxy also fails, hide the image
      e.target.style.display = "none";
      e.target.parentElement.classList.add("image-error");
    }
  };

  if (loading) {
    return (
      <div className="instagram-feed-container">
        <div className="instagram-feed-loading-container">
          <div className="instagram-feed-spinner"></div>
          <p className="instagram-feed-loading-text">
            Loading Instagram posts...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="instagram-feed-container">
        <div className="instagram-feed-error-container">
          <div className="instagram-feed-error-icon">⚠️</div>
          <h3 className="instagram-feed-error-title">Error Loading Posts</h3>
          <p className="instagram-feed-error-message">{error}</p>
          <p className="instagram-feed-error-hint">
            This might be a temporary issue. Please try again.
          </p>
          <button
            onClick={fetchInstagramPosts}
            className="instagram-feed-retry-button"
          >
            <RefreshCw size={16} />
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="instagram-feed-container">
      <div className="instagram-feed-wrapper">
        {/* Header Section */}
        <div className="instagram-feed-header">
          <div className="instagram-header-title-section">
            <FaInstagram className="instagram-header-icon" />
            <h1 className="instagram-header-title">Dr. Zainab Vora</h1>
          </div>
          <p className="instagram-header-subtitle">Latest Instagram Posts</p>
        </div>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <div className="instagram-no-posts">
            <p>No posts available yet</p>
          </div>
        ) : (
          <div className="instagram-posts-grid">
            {posts.slice(0, 3).map((post, index) => (
              <div key={index} className="instagram-post-card">
                {/* Post Image */}
                {post.imageUrl ? (
                  <div className="instagram-post-image-container">
                    <img
                      src={post.imageUrl}
                      alt={post.title || "Instagram post"}
                      className="instagram-post-image"
                      loading="lazy"
                      crossOrigin="anonymous"
                      onError={(e) => handleImageError(e, post)}
                    />
                  </div>
                ) : (
                  <div className="instagram-post-image-placeholder">
                    <Instagram size={48} />
                    <p>Image not available</p>
                  </div>
                )}

                {/* Post Content */}
                <div className="instagram-post-content">
                  {/* Date */}
                  <div className="instagram-post-date">
                    <Calendar size={16} />
                    <span>{formatDate(post.pubDate)}</span>
                  </div>

                  {/* Caption */}
                  <p className="instagram-post-caption">
                    {truncateText(
                      post.description || post.title || "No caption"
                    )}
                  </p>

                  {/* View on Instagram Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-view-link"
                  >
                    View on Instagram
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Refresh Button */}
        <div className="instagram-refresh-section">
          <NavLink
            to="https://www.instagram.com/drzainabvora"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-follow-link"
          >
            Follow on Instagram
            <ExternalLink size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default InstagramFeed;
