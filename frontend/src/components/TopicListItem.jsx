import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { topic, updatePhotosByTopics } = props;
  return (
    <div
      className="topic-list__item"
      onClick={() => updatePhotosByTopics(true, topic)}
    >
      {topic.title}
    </div>
  );
};

export default TopicListItem;
