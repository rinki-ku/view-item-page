import React from "react";
import "./__style.scss";
import ImageGallery from "react-image-gallery";

const productGallery = ({ items }) => (
  <ImageGallery
    items={items}
    showNav={true}
    showThumbnails={true}
    thumbnailPosition="bottom"
    showBullets={false}
  />
);
export default productGallery;
