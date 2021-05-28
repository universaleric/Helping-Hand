import React from "react";
import { Container } from "../components/Grid";
import Nav from "../components/Nav";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";

function Availability() {
  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>

      <Card
        bg="info"
        style={{
          textAlign: "center",
          width: "45rem",
          marginLeft: "auto",
          marginRight: "auto",
          fontWeight: "bold",
        }}
      >
        <Card.Body>Julian’s Availability:</Card.Body>
      </Card>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Please select the 1 hour time slot you would like Julian to call you
        during:
      </h2>

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

export default Availability;
