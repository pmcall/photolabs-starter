import { useState } from "react";

const userApplicationData = () => {
  const [state, setState] = useState({
    photoIDs: [],
    modal: false,
    photoData: {},
  });

  const updateFavouritePhotoIDs = (id, action) => {
    if (!action) {
      setState({ ...state, photoIDs: [...state.photoIDs, id] });
    } else {
      setState({
        ...state,
        photoIDs: [...state.photoIDs].filter((itemID) => itemID !== id),
      });
    }
  };

  const modalData = (flag, item) => {
    setState({ ...state, photoData: item, modal: flag });
  };

  const closePhotoDetailsModal = () => {
    setState({ ...state, modal: false });
  };

  return {
    state,
    updateFavouritePhotoIDs,
    modalData,
    closePhotoDetailsModal,
  };
};

export default userApplicationData;
