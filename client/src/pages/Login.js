import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn } from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";

function Login(props) {
  const [formObject, setFormObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.username && formObject.password) {
      API.loginCred({
        username: formObject.username,
        password: formObject.password,
      })
        .then((res) => {
          props.setUserInfo(res.data.user);
          console.log(res)})
        .catch((err) => console.log(err));
    }
  }

  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>
      <Row>
        <Col size="md-6">
          <h3>Log In!</h3>
          <form>
            <Input
              onChange={handleInputChange}
              name="username"
              placeholder="User Name"
            />
            <Password
              onChange={handleInputChange}
              name="password"
              placeholder="Password"
            />
            <FormBtn
              disabled={!(formObject.username && formObject.password)}
              onClick={handleFormSubmit}
            >
              Login
            </FormBtn>
            <Link to="signup">
              <FormBtn>Sign Up!</FormBtn>
            </Link>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
