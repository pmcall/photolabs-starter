import React, { useCallback, useState, useEffect } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = (props) => {
  const { onClick, selected } = props;

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon onClick={onClick} selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
