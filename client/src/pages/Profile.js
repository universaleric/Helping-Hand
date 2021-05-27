import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn, AnimatedMulti } from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";

function Profile() {
  const [users, setUsers] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  useEffect(() => {
    loadUsers();
    loadUserSkills();
  }, []);

  function loadUsers() {
    API.getUsers()
      .then((res) => {
        setUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadUserSkills() {
    API.getUserSkills()
      .then((res) => {
        setUserSkills(res.data);
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
      <h3>Hello, {users.userName}</h3>
      <Row>
        <Col size="md-6">
          <Link to="inbox">
            <FormBtn> View Inbox </FormBtn>
          </Link>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Your Skills List</Card.Title>
              <Card.Text>Ello Poppet!</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col size="md-6">
          <Link to="results">
            <FormBtn> Find a Helping Hand</FormBtn>
          </Link>
          
        </Col>

        <Col size="md-6">
          <ul className="skillList">
            <li> {skill} </li>
            <li> {skill} </li>
            <li> {skill} </li>
            <li> {skill} </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
