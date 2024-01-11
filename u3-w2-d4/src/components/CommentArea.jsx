import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = (props) => {
  const [comments, setComments] = useState([]);

  const options = {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjFhOWUwZGQxZDAwMTgyZDE3MGIiLCJpYXQiOjE3MDQ4MTAxOTUsImV4cCI6MTcwNjAxOTc5NX0.j-qVxPsFRlZurVkeKaipdkqvgQ31RbROocEdQpHj6PE",
    },
  };

  const fetchComments = async (id, options) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, options);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (props.id !== null) {
      fetchComments(props.id, options);
    }
  }, [props.id]);

  const addComment = (newComment) => {
    setComments({ ...comments, newComment });
  };

  return (
    <div className="bg-white p-2 mt-5 mb-3 position-sticky commentPos z-1000 overflow-auto">
      <h2>Comments</h2>
      {props.id && (
        <>
          <CommentList comments={comments} />
          <AddComment id={props.id} addComment={addComment} />
        </>
      )}
    </div>
  );
};

export default CommentArea;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0M2ZlM2I1MjViYjAwMThlZDA3ZWQiLCJpYXQiOjE3MDMxNjU5MjMsImV4cCI6MTcwNDM3NTUyM30.VUXUi44olcV3-2nfBWch_QUBs1QcEqQz91DH458oAV8
