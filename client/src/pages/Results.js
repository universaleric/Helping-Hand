import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { AnimatedSingle } from "../components/Form";
import { Link } from "react-router-dom";

import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "react-bootstrap/Card";

function Results() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    loadSkills();
  }, []);

  function loadSkills() {
    API.getSkills()
      .then((res) => {
        setSkills(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>
      <Row>
        <Col size="md-6">
          <h4>Select what you need help with:</h4>
          <form className="mx-auto">
            <AnimatedSingle skills={skills}></AnimatedSingle>
          </form>
          <Card>
            <Card.Body>
              <Link to="/availability">Julian Almendarez</Link>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Link to="/availability">Allison Neary</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Results;
