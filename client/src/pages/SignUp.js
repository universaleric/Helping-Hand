import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";

function SignUp() {
  return (
    <Container fluid>
      <Row>
        <Nav>
          <h1>Helping Hand</h1>
          <p>For when you want to DIY but just need a little help.</p>
        </Nav>
        <Col size="md-6"></Col>
      </Row>
    </Container>
  );
}

export default SignUp;
