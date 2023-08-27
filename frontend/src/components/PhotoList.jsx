import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, updateFavouritePhotoIDs, photoModal, modalData, favourites } =
    props;
  const photoListItemArray = photos.map((item) => (
    <li key={item.id}>
      <PhotoListItem
        item={item}
        updateFavouritePhotoIDs={updateFavouritePhotoIDs}
        photoModal={photoModal}
        modalData={modalData}
        favourites={favourites}
      />
    </li>
  ));

  return <ul className="photo-list">{photoListItemArray}</ul>;
};

export default PhotoList;
