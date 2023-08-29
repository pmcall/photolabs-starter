import React, { useState, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
// import photos from "mocks/photos";
// import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import userApplicationData from "hooks/userApplicationData";

const App = () => {
  let favouritePhotoExists = false;

  const {
    state,
    updateFavouritePhotoIDs,
    modalData,
    closePhotoDetailsModal,
    fetchData,
  } = userApplicationData();

  {
    favouritePhotoExists = fetchData.photoIDs.length
      ? !favouritePhotoExists
      : favouritePhotoExists;
  }

  return (
    <div className="App">
      <HomeRoute
        topics={fetchData.topicData}
        photos={fetchData.photoData}
        updateFavouritePhotoIDs={updateFavouritePhotoIDs}
        favourites={fetchData.photoIDs}
        favouritePhotoExists={favouritePhotoExists}
        modalData={modalData}
      />
      {fetchData.modal && (
        <PhotoDetailsModal
          photos={fetchData.selectedPhoto}
          favourites={fetchData.photoIDs}
          updateFavouritePhotoIDs={updateFavouritePhotoIDs}
          closePhotoDetailsModal={closePhotoDetailsModal}
        />
      )}
    </div>
  );
};
export default App;
