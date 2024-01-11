import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const SingleBook = (props) => {
  return (
    <Card
      className="mb-3"
      style={props.selected === props.id ? { border: "2px solid lightblue", backgroundColor: "lightblue" } : {}}
    >
      <div className="overflow-hidden" style={{ height: "300px" }} onClick={() => props.setSelected(props.id)}>
        <Card.Img variant="top" src={props.img} />
      </div>
      <Card.Body style={{ height: "200px" }} className="d-flex flex-column justify-content-between align-items-center">
        <div>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.price}$</Card.Text>
        </div>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleBook;
