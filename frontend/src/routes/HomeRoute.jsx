import React from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

const HomeRoute = (props) => {
  const {
    topics,
    photos,
    updateFavouritePhotoIDs,
    favouritePhotoExists,
    photoModal,
    modalData,
    favourites,
    updatePhotosByTopics,
  } = props;
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        favouritePhotoExists={favouritePhotoExists}
        updatePhotosByTopics={updatePhotosByTopics}
      />
      <div className="photo-list">
        <PhotoList
          favourites={favourites}
          photos={photos}
          updateFavouritePhotoIDs={updateFavouritePhotoIDs}
          photoModal={photoModal}
          modalData={modalData}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
