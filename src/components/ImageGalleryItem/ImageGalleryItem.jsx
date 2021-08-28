import React from "react";

const ImageGalleryItem = (props) => {
  return (
    <>
      <li className="ImageGalleryItem">
        <img
          src={props.image.webformatURL}
          alt=""
          className="ImageGalleryItem-image"
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
