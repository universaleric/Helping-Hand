import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Card from "react-bootstrap/Card";

function Inbox() {
  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>

      <h1 style={{ textAlign: "center" }}> Inbox</h1>

      <Row>
        <Col size="md-6">
          <h3>Hello, Eric!</h3>
          <Card>
            <Card.Body>
              You requested to have Julian reach out to you on Tuesday at 9:00AM
              to assist you with a task involving cooking. Please make sure you
              are next to your phone when they call.
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              You have been requested to help Allison with a task involving
              electrical on Thursday at 2:00PM. Please call them at 354-957-9013
              to lend a helping hand!
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              You have been requested to help Julian with a task involving
              plumbing on Wednesday at 3:00PM. Please call them at 354-237-4213
              to lend a helping hand!
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Inbox;
