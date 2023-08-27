import React, { useState, useEffect } from "react";

// import PhotoList from "./components/PhotoList";
// import TopicList from "components/TopicList";
// import TopNavigationBar from "components/TopNavigationBar";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

const App = () => {
  const [photoIDs, setPhotoIDs] = useState([]);
  let favouritePhotoExists = false;
  const [modal, setModal] = useState(false);
  const [photoData, setPhotoData] = useState({});

  const updateFavouritePhotoIDs = (id, action) => {
    if (!action) {
      setPhotoIDs((prevPhotoIDs) => [...prevPhotoIDs, id]);
    } else {
      setPhotoIDs((oldValues) => {
        return oldValues.filter((itemID) => itemID !== id);
      });
    }
  };

  const modalData = (flag, item) => {
    setModal(flag);
    setPhotoData(item);
  };

  const photoModal = () => {
    if (!modal) {
      setModal(true);
    }
  };

  {
    favouritePhotoExists = photoIDs.length
      ? !favouritePhotoExists
      : favouritePhotoExists;
  }

  useEffect(() => {
    console.log(modalData);
  }, [photoData]);

  return (
    <div className="App">
      {/* <div className="App">
        <TopNavigationBar />
      </div>
      <PhotoList /> */}
      <HomeRoute
        topics={topics}
        photos={photos}
        updateFavouritePhotoIDs={updateFavouritePhotoIDs}
        favourites={photoIDs}
        favouritePhotoExists={favouritePhotoExists}
        modalData={modalData}
      />
      {modal && (
        <PhotoDetailsModal
          modalData={modalData}
          photoData={photoData}
          favourites={photoIDs}
          updateFavouritePhotoIDs={updateFavouritePhotoIDs}
          closePhotoDetailsModal={() => setModal(false)}
        />
      )}
    </div>
  );
};
export default App;
