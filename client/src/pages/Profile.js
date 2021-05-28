import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import { ListItem, List } from "../components/List";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";
import Card from "react-bootstrap/Card";

function Profile() {
  let first_name = sessionStorage.getItem("first_name");
  let listItems = [];

  useEffect(() => {
    userSkillsList();
  }, []);

  function userSkillsList() {
    let id = sessionStorage.getItem("user_id");
    console.log(id);
    API.getUserSkills(id)
      .then((res) => {
        let data = res.data;
        let ids = data.map((item) => item.skills_id);
        console.log(ids);
        ids.map((idArray) =>
          API.getSkillsData(idArray)
            .then((res) => {
              let list = res.data[0];
              listItems.push(list);
              console.log(listItems);
            })
            .catch((err) => console.log(err))
        );
      })
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>
      <h3>Hello, {first_name}!</h3>
      <Row>
        <Col size="md-6">
          <Link to="inbox">
            <FormBtn> View Inbox </FormBtn>
          </Link>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Your Skills List</Card.Title>
              <List>
                {listItems.map((listItem) => (
                  <ListItem key={listItem}>{listItem}</ListItem>
                ))}
              </List>
            </Card.Body>
          </Card>
        </Col>

        <Col size="md-6">
          <Link to="results">
            <FormBtn> Find a Helping Hand</FormBtn>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
