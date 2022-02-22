import React from "react";
import { Container, Row, Col } from "reactstrap";
import Todo from "./components/todos";

function App() {
  return (
    <Container className="my-3">
      <Row>
        <Col className="col-md-10 offset-md-1">
          <h1 className="text-center">Bismillah.</h1>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
