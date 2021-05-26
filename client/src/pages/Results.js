import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "react-bootstrap/Card";

function Results() {
  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>
      <h1>Select what you need help with:</h1>
      <Row>
        <Col size="md-6">
          <div class="selectdiv">
            <label>
              <select>
                <option selected> Select Box </option>
                <option> Lawn Help</option>
                <option> Pool Help </option>
                <option> Kitchen </option>
              </select>
            </label>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
            <Card>
              <Card.Body>This is some text within a card body.</Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Results;
