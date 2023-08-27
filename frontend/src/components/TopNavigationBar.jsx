import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigationBar = (props) => {
  const { topics, favouritePhotoExists } = props;
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">写真ラボ PhotoLabo</span>
      <TopicList topics={topics} />
      <FavBadge favouritePhotoExists={favouritePhotoExists} />
    </div>
  );
};

export default TopNavigationBar;
