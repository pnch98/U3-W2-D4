import { useState } from "react";
import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";

const AddComment = (props) => {
  const [review, setReview] = useState({
    comment: "",
    rate: "3",
    elementId: props.id,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        body: JSON.stringify({ ...review, elementId: props.id }),
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZjFhOWUwZGQxZDAwMTgyZDE3MGIiLCJpYXQiOjE3MDQ4MTAxOTUsImV4cCI6MTcwNjAxOTc5NX0.j-qVxPsFRlZurVkeKaipdkqvgQ31RbROocEdQpHj6PE",
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        props.addComment({ ...review, elementId: props.id });
        setReview({
          comment: "",
          rate: "3",
          elementId: props.id,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleValue = (propertyName, propertyValue) => {
    setReview({ ...review, [propertyName]: propertyValue });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup controlId="formRate">
        <small>Rate</small>
        <FormRange
          type="number"
          min={0}
          max={5}
          value={review.rate}
          onChange={(event) => handleValue("rate", event.target.value)}
          required
        />
      </FormGroup>

      <FormGroup controlId="formComment">
        <FormControl
          className="mb-2"
          type="text"
          placeholder="Comment"
          value={review.comment}
          onChange={(event) => handleValue("comment", event.target.value)}
          required
        />
      </FormGroup>
      <Button variant="primary" type="submit">
        Add comment
      </Button>
    </Form>
  );
};

export default AddComment;
