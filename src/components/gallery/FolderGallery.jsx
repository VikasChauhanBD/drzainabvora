import React, { useState } from "react";
import "./FolderGallery.css";
import { ArrowLeft, Folder } from "lucide-react";
import { galleryFoldersData } from "../../assets/data/galleryData";

const FolderGallery = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openFolder = (folder) => {
    setSelectedFolder(folder);
  };

  const closeFolder = () => {
    setSelectedFolder(null);
    setSelectedImage(null);
  };

  const openPopup = (item) => {
    setSelectedImage(item);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      {!selectedFolder ? (
        <>
          <div className="folders-grid">
            {galleryFoldersData.map((folder) => (
              <div
                key={folder.id}
                className="folder-card"
                onClick={() => openFolder(folder)}
              >
                <div className="folder-thumbnail">
                  <img
                    src={folder.thumbnail}
                    alt={folder.name}
                    loading="lazy"
                  />
                </div>
                <div className="folder-info">
                  <Folder className="folder-icon" size={24} />
                  <h3 className="folder-name">{folder.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="gallery-header">
            <button className="gallery-back-button" onClick={closeFolder}>
              <ArrowLeft size={20} />
              Back to Folders
            </button>
            <h1 className="gallery-title">{selectedFolder.name}</h1>
          </div>
          <div className="galleryList-grid">
            {selectedFolder.images.map((item) => (
              <div
                key={item.id}
                className="galleryList-item"
                onClick={() => openPopup(item)}
              >
                <img src={item.src} alt="" loading="lazy" />
              </div>
            ))}
          </div>
        </>
      )}

      {selectedImage && (
        <div className="galleryList-popup-overlay" onClick={closePopup}>
          <div
            className="galleryList-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="galleryList-popup-close" onClick={closePopup}>
              &times;
            </button>
            <img src={selectedImage.src} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default FolderGallery;
