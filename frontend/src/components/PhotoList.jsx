/* eslint-disable indent */

import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {
    photos,
    updateFavouritePhotoIDs,
    photoModal,
    modalData,
    favourites,
    updateModalData,
  } = props;

  const photoListItemArray =
    photos.length > 0
      ? photos.map((item) => (
          <li key={item.id}>
            <PhotoListItem
              item={item}
              updateFavouritePhotoIDs={updateFavouritePhotoIDs}
              updateModalData={updateModalData}
              photoModal={photoModal}
              modalData={modalData}
              favourites={favourites}
            />
          </li>
        ))
      : null;

  return <ul className="photo-list">{photoListItemArray}</ul>;
};

export default PhotoList;
