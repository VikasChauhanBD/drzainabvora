import React, { useState } from "react";
import "./GalleryList.css";
import Image1 from "../../assets/images/crash-course-image1.jpg";
import Image2 from "../../assets/images/crash-course-image2.jpg";
import Image3 from "../../assets/images/neet-pg-bootcamp.webp";
import Image4 from "../../assets/images/crash-course-image1.jpg";
import Image5 from "../../assets/images/why-btr-header-1.JPG";
import Image6 from "../../assets/images/why-btr-header-2.JPG";

const galleryItems = [
  {
    id: 1,
    src: Image1,
    size: "tall",
  },
  {
    id: 2,
    src: Image2,
    size: "normal",
  },
  {
    id: 3,
    src: Image3,
    size: "normal",
  },
  {
    id: 4,
    src: "https://cdn.dribbble.com/userupload/46169262/file/92db9be06f53507ee62c366a28769c86.jpg",
    size: "normal",
  },
  {
    id: 5,
    src: Image5,
    size: "normal",
  },
  {
    id: 6,
    src: Image6,
    size: "wide",
  },
  {
    id: 7,
    src: "https://cdn.dribbble.com/userupload/46169258/file/97c56a4b41db5861157595a39f7520af.jpg",
    size: "normal",
  },
  {
    id: 8,
    src: "https://cdn.dribbble.com/userupload/46169259/file/b8162574c47f15176fa31bd9b685d942.jpg",
    size: "normal",
  },
  {
    id: 9,
    src: "https://cdn.dribbble.com/userupload/46169260/file/4737c1ede28e550da6a5f9702c81cfd3.jpg",
    size: "wide",
  },
  {
    id: 10,
    src: "https://cdn.dribbble.com/userupload/46169351/file/adc5262511cc13a5f02981fb7401b851.jpg",
    size: "tall",
  },
];

const GalleryList = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (item) => {
    setSelectedImage(item);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="galleryList-container">
      <div className="galleryList-grid">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className={`galleryList-item ${item.size}`}
            onClick={() => openPopup(item)}
          >
            <img src={item.src} alt={item.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div className="galleryList-popup-overlay" onClick={closePopup}>
          <div
            className="galleryList-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="galleryList-popup-close" onClick={closePopup}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryList;
