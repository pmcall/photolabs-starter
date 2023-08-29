/* eslint-disable indent */

import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  SHOW_MODAL: "SHOW_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return { ...state, photoIDs: [...state.photoIDs, action.payload.id] };
    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        photoIDs: [...state.photoIDs].filter(
          (itemID) => itemID !== action.payload.id
        ),
      };
    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        selectedPhoto: action.payload.item,
        modal: action.payload.flag,
      };
    case ACTIONS.MODAL_PHOTO_DATA:
      return action.item;
    case ACTIONS.CLOSE_MODAL:
      return { ...state, modal: false };
    case ACTIONS.SET_PHOTO_DATA:
      return { ...state, photoData: action.payload };
    case ACTIONS.SET_TOPIC_DATA:
      return { ...state, topicData: action.payload };
    case ACTIONS.GET_PHOTOS_BY_TOPICS:
      return { ...state, photoData: action.payload };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
};

const userApplicationData = () => {
  const initialState = {
    photoIDs: [],
    modal: false,
    photoData: [],
    topicData: [],
    selectedPhoto: {},
  };
  const [fetchData, dispatch] = useReducer(reducer, initialState);

  const updateFavouritePhotoIDs = (id, action) => {
    if (!action) {
      dispatch({ type: "FAV_PHOTO_ADDED", payload: { id } });
    } else {
      dispatch({ type: "FAV_PHOTO_REMOVED", payload: { id } });
    }
  };

  const modalData = (item, flag) => {
    dispatch({ type: "SHOW_MODAL", payload: { item, flag } });
  };

  const closePhotoDetailsModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  const updateModalData = (flag, item) => {
    console.log(flag);
    console.log(item);

    dispatch({ type: ACTIONS.SHOW_MODAL, payload: flag });
    dispatch({ type: ACTIONS.MODAL_PHOTO_DATA, payload: item });
  };

  const updatePhotosByTopics = (flag, topic) => {
    console.log(topic);
    if (flag) {
      fetch(`http://localhost:8001/api/topics/photos/${topic.id}`)
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data })
        );
    } else {
      fetchAllPhotos();
    }
  };

  const fetchAllPhotos = () => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data })
      );
  };

  useEffect(() => {
    fetchAllPhotos();
  }, []);

  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data })
      );
  }, []);

  return {
    // state,
    updateFavouritePhotoIDs,
    modalData,
    closePhotoDetailsModal,
    fetchData,
    updateModalData,
    updatePhotosByTopics,
  };
};

export default userApplicationData;
