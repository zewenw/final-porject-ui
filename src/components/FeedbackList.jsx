import React from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  // console.log(feedback);
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Yet</p>;
  } else {
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default FeedbackList;
