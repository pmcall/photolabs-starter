import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoListItem from "components/PhotoListItem";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const {
    photoModal,
    photoData,
    photos,
    updateFavouritePhotoIDs,
    closePhotoDetailsModal,
    favourites,
    updateModalData,
  } = props;

  const item = photos;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} onClick={closePhotoDetailsModal} alt="Close" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          onClick={() => {
            if (favourites.includes(item.id)) {
              updateFavouritePhotoIDs(item.id, true);
            } else {
              updateFavouritePhotoIDs(item.id, false);
            }
          }}
          selected={favourites.includes(item.id)}
          item={item}
        />
        <img
          src={item.urls.regular}
          className="photo-details-modal__image"
          alt="main image"
        />
        <h1 className="photo-details-modal__header">Similar Photos</h1>
        <div className="photo-details-modal__images">
          <PhotoList
            photos={item.similar_photos}
            updateFavouritePhotoIDs={updateFavouritePhotoIDs}
            favourites={favourites}
          />
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
