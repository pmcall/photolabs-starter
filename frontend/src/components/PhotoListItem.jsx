import React, { useState, useEffect } from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoList.scss";
import PhotoFavButton from "./PhotoFavButton";
import PhotoList from "./PhotoList";

const PhotoListItem = (props) => {
  const { item, updateFavouritePhotoIDs, modalData, photoModal, favourites } =
    props;

  const onClick = () => {
    if (favourites.includes(item.id)) {
      updateFavouritePhotoIDs(item.id, true);
    } else {
      updateFavouritePhotoIDs(item.id, false);
    }
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        onClick={onClick}
        selected={favourites.includes(item.id)}
      />
      <img
        className="photo-list__image"
        onClick={() => modalData(true, item)}
        src={item.urls.regular}
        alt="image"
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={item.user.profile}
          alt="User"
        />
        <div>
          <p className="photo-list__user-info">{item.user.username}</p>
          <p className="photo-list__user-info">{item.user.name}</p>
          <p className="photo-list__user-location">
            {item.location.city}, {item.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
