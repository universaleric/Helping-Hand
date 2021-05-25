import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";

function SignUp() {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      formObject.first_name &&
      formObject.last_name &&
      formObject.username &&
      formObject.phone_number &&
      formObject.password
    ) {
      API.saveUser({
        first_name: formObject.first_name,
        last_name: formObject.last_name,
        username: formObject.username,
        phone_number: formObject.phone_number,
        password: formObject.password,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
        
      </Nav>
      <h3>Sign Up!</h3>
      <Row>
        <Col size="md-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="first_name"
              placeholder="First Name"
            />
            <Input
              onChange={handleInputChange}
              name="last_name"
              placeholder="Last Name"
            />
            <Input
              onChange={handleInputChange}
              name="username"
              placeholder="User Name"
            />
            <Input
              onChange={handleInputChange}
              name="phone_number"
              placeholder="Phone Number"
            />
            <Password
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
            />
            <FormBtn
              disabled={
                !(
                  formObject.first_name &&
                  formObject.last_name &&
                  formObject.username &&
                  formObject.phone_number &&
                  formObject.password
                )
              }
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
            <Link to="login">
              <FormBtn>Return To Login</FormBtn>
            </Link>
          </form>
        </Col>
        {/* <Col size="md-6">
        <form>
        <DropDown></DropDown>
        </form>
        </Col> */}
      </Row>
    </Container>
  );
}

export default SignUp;
