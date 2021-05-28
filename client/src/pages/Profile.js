import React, { useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn } from "../components/Form";
import { ListItem, List } from "../components/List";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function Profile() {
  let first_name = sessionStorage.getItem("first_name");
  let list = "";
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
              list = res.data[0];
              listItems.push(list);
              console.log(list);
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
      <h3>Hello, Eric!</h3>
      <Row>
        <Col size="md-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Your Skills List</Card.Title>
              <List>
                {/* {listItems.map((listItem) => (
                  <ListItem key={listItem}>{listItem}</ListItem>
                ))} */}

                <ListItem>Plumbing</ListItem>
                <ListItem>Electrical</ListItem>
              </List>
            </Card.Body>
          </Card>
        </Col>

        <Col size="md-6">
          <Link to="results">
            <FormBtn> Find a Helping Hand</FormBtn>
          </Link>
          <Link to="inbox">
            <FormBtn> View Inbox </FormBtn>
          </Link>
        </Col>
      </Row>
      <h3>Your Availability</h3>
      <Table
        responsive
        variant="warning"
        style={{ width: "80rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>8:00AM</td>
            <td>9:00AM</td>
            <td>10:00AM</td>
            <td>11:00AM</td>
            <td>12:00PM</td>
            <td>1:00PM</td>
            <td>2:00PM</td>
            <td>3:00PM</td>
            <td>4:00PM</td>
            <td>5:00PM</td>
            <td>6:00PM</td>
            <td>7:00PM</td>
            <td>8:00PM</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Profile;
