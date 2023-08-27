import React, { useState, useEffect } from "react";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import userApplicationData from "hooks/userApplicationData";

const App = () => {
  let favouritePhotoExists = false;

  const { state, updateFavouritePhotoIDs, modalData, closePhotoDetailsModal } =
    userApplicationData();

  {
    favouritePhotoExists = state.photoIDs.length
      ? !favouritePhotoExists
      : favouritePhotoExists;
  }

  return (
    <div className="App">
      <HomeRoute
        topics={topics}
        photos={photos}
        updateFavouritePhotoIDs={updateFavouritePhotoIDs}
        favourites={state.photoIDs}
        favouritePhotoExists={favouritePhotoExists}
        modalData={modalData}
      />
      {state.modal && (
        <PhotoDetailsModal
          photoData={state.photoData}
          favourites={state.photoIDs}
          updateFavouritePhotoIDs={updateFavouritePhotoIDs}
          closePhotoDetailsModal={closePhotoDetailsModal}
        />
      )}
    </div>
  );
};
export default App;
