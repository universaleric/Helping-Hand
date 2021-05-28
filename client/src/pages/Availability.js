import React from "react";
import {Container } from "../components/Grid";
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
        <Card.Body>Expert 1’s Availability:</Card.Body>
      </Card>
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Please select the 1 hour time slot you would like Expert 1 to call you
        during:
      </h2>

      <Table
        responsive
        variant="warning"
        style={{ width: "80rem", marginLeft: "auto", marginRight: "auto" }}
      >
        <thead>
          <tr>
            <th>#</th>
            {Array.from({ length: 12 }).map((_, index) => (
              <th key={index}>*inset time*</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Tuesday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Wednesday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Thursday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Friday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Saturday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            <td>Sunday</td>
            {Array.from({ length: 12 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Availability;
