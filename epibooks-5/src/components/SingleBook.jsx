import { Card } from "react-bootstrap";

const SingleBook = ({ changeSelectedBook, selectedBook, book }) => {
  return (
    <>
      <Card
        data-testid="card"
        onClick={() => changeSelectedBook(book.asin)}
        className={selectedBook === book.asin ? "selectedCard" : ""}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }} data-testid="card-title">
            {book.title}
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleBook;
