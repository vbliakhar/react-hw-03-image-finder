import React from "react";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
function ImageGallery(props) {
  return (
    <ul className="ImageGallery">
      {props.images.map((image) => {
        return <ImageGalleryItem image={image} key={image.id} />;
      })}
    </ul>
  );
}

export default ImageGallery;
