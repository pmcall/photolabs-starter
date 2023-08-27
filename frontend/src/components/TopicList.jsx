import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;
  const TopicListItemArray = topics.map((topic) => (
    <div className="topic-list__item" key={topic.id}>
      <TopicListItem topic={topic}></TopicListItem>
    </div>
  ));

  return <div className="top-nav-bar__topic-list">{TopicListItemArray}</div>;
};

export default TopicList;
