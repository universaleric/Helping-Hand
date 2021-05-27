import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn, AnimatedMulti } from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";


function Profile() {
  const [users, setUsers] = useState([]);
  function loadUsers() {
    API.getUsers()
      .then((res) => {
        setUsers(res.data);
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
      <h3>Hello, {userName}</h3>
      <button type="button" class="btn btn-inbox">View Inbox</button>
      //needs to add in the hand counter.
      <div>
        <a href="/">
          {" "}
          //needs to be linked to the grid availibility page
          {userName.availability}Availability // needs to be formatted with the
          grid//
        </a>
      </div>
      <form>
        <link to="./models/skills.js">{userName.skill}Skills</link>
          
      </form>
      <input>
        <a href="./models/userskill.js">
          {" "}
          <button type="button" class="btn btn-success">
            Find a Helping Hand
          </button>
          {userName.userskill}
        </a>
      </input>
      <Col size="md-6">
        <ul className="skillList">
          <li> {skill} </li>
          <li> {skill} </li>
          <li> {skill} </li>
          <li> {skill} </li>
        </ul>
      </Col>
    </Container>
  );
}

export default Profile;
