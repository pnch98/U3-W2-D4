import { useState } from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

const App = () => {
  const [selected, setSelected] = useState(null);

  const newSelected = (asin) => {
    setSelected(asin);
  };

  return (
    <div className="App">
      <MyNav mainLink="Home" link2="About" link3="Browse" navBg="bg-info" />
      <Welcome title="React-Shop" subtitle="Il tuo reactive shop preferito!" />
      <Container>
        <Row>
          <Col md={9}>
            <AllTheBooks setSelected={newSelected} selected={selected} />
          </Col>
          <Col md={3}>
            <CommentArea id={selected} />
          </Col>
        </Row>
      </Container>

      <MyFooter myContacts="Mi disp i miei contatti ma non te li do" />
    </div>
  );
};

export default App;
