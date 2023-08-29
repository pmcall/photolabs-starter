import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigationBar = (props) => {
  const { topics, favouritePhotoExists, updatePhotosByTopics } = props;
  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={() => updatePhotosByTopics(false)}
      >
        写真ラボ PhotoLabo
      </span>
      <TopicList topics={topics} updatePhotosByTopics={updatePhotosByTopics} />
      <FavBadge favouritePhotoExists={favouritePhotoExists} />
    </div>
  );
};

export default TopNavigationBar;
