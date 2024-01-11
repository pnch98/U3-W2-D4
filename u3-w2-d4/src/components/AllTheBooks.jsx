import { useState } from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";
import fantasy from "../data/books/fantasy.json";
import Genre from "./Genre";
import SingleBook from "./SingleBook";

const AllTheBooks = (props) => {
  const [data, setData] = useState(fantasy);
  const [searchValue, setSearchValue] = useState("");

  const handleDataChange = (data) => {
    setData(data);
  };
  const handleSearch = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <div className="container d-flex justify-content-between align-items-baseline my-3">
        <Genre data={data} onDataChange={handleDataChange} />
        <FormGroup controlId="searchFormId">
          <FormControl
            style={{ maxWidth: "300px", height: "40px" }}
            type="text"
            placeholder="Cerca"
            value={searchValue}
            onChange={(event) => handleSearch(event.target.value)}
          />
        </FormGroup>
      </div>

      <Container>
        <Row xs={2} lg={4}>
          {data
            .filter((book) => book.title.toLowerCase().includes(searchValue.toLowerCase()))
            .map((book) => (
              <Col key={book.asin}>
                <SingleBook
                  img={book.img}
                  title={book.title}
                  price={book.price}
                  id={book.asin}
                  setSelected={props.setSelected}
                  selected={props.selected}
                />
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default AllTheBooks;
