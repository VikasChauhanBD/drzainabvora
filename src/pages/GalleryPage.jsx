import React from "react";
import { Helmet } from "react-helmet";
import FolderGallery from "../components/gallery/FolderGallery";

function GalleryPage() {
  return (
    <div>
      <Helmet>
        <title>Gallery - Dr. Zainab Vora</title>

        <meta
          name="description"
          content="The gallery of Dr. Zainab Vora captures teaching moments, student interactions, workshops, and academic milestones from her learning programs."
        />
      </Helmet>

      <FolderGallery />
    </div>
  );
}

export default GalleryPage;
