import React from "react";
import Comment from "./Comment";
const Comments = (props) => {
  return props.comments.map((co) => (
    <Comment key={co.username} username={co.username} body={co.body} />
  ));
};

export default Comments;
