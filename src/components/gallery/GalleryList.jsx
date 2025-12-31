import React, { useState } from "react";
import "./GalleryList.css";
import Image1 from "../../assets/images/crash-course-image1.jpg";
import Image2 from "../../assets/images/crash-course-image2.jpg";
import Image3 from "../../assets/images/neet-pg-bootcamp.webp";
import Image5 from "../../assets/images/btr-header-1.JPG";

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
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766822097/4737c1ede28e550da6a5f9702c81cfd3_bhgqk2.jpg",
    size: "wide",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766822112/why-btr-header-2_t0d5su.jpg",
    size: "wide",
  },
  {
    id: 8,
    src: "https://cdn.dribbble.com/userupload/46169258/file/97c56a4b41db5861157595a39f7520af.jpg",
    size: "normal",
  },
  {
    id: 9,
    src: "https://cdn.dribbble.com/userupload/46169259/file/b8162574c47f15176fa31bd9b685d942.jpg",
    size: "normal",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820785/Screenshot_2025-09-02_at_8_00_06_PM-Picsart-AiImageEnhancer_xgbvka.jpg",
    size: "tall",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820975/Screenshot_2025-09-02_at_7_58_39_PM-Picsart-AiImageEnhancer_ykk4ib.jpg",
    size: "tall",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.45_33_sgqa9r.jpg",
    size: "tall",
  },
  {
    id: 13,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.46_8_yjdyzx.jpg",
    size: "tall",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820975/image02-09-2025_at_18.52.46_20_was6n2.jpg",
    size: "tall",
  },
  {
    id: 15,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.46_16_umsmyc.jpg",
    size: "normal",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820975/Screenshot_2025-09-02_at_7_57_41_PM-Picsart-AiImageEnhancer_zemmiq.jpg",
    size: "normal",
  },

  {
    id: 17,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820973/image02-09-2025_at_18.52.45_2_eb6r9o.jpg",
    size: "normal",
  },

  {
    id: 18,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820973/image02-09-2025_at_18.52.45_5_btqshg.jpg",
    size: "normal",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.45_26_apkgte.jpg",
    size: "wide",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.45_19_a7rh6l.jpg",
    size: "wide",
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820973/image02-09-2025_at_18.52.45_10_ewfmle.jpg",
    size: "normal",
  },
  {
    id: 22,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.45_28_s5bcje.jpg",
    size: "normal",
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dc7y7ypmm/image/upload/v1766820974/image02-09-2025_at_18.52.46_13_acvfl7.jpg",
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
