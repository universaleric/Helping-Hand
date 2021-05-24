import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { Input, Password, FormBtn } from "../components/Form";
import Nav from "../components/Nav";
import API from "../utils/API";

function SignUp() {
  const [formObject, setFormObject] = useState({})


  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.firstName &&
      formObject.lastName &&
      formObject.userName &&
      formObject.phoneNum &&
      formObject.password) {
      API.saveUser({
        firstName: formObject.firstName,
        lastName: formObject.lastName,
        userName: formObject.userName,
        phoneNum: formObject.phoneNum,
        password: formObject.password
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <Container fluid>
      <Row>
        <Nav>
          <h1>Helping Hand</h1>
          <p>For when you want to DIY but just need a little help.</p>
        </Nav>
        <Col size="md-6">
          <form>
            <Input
              onChange={handleInputChange}
              name="firstName"
              placeholder="First Name (required)"
            />
            <Input
              onChange={handleInputChange}
              name="lastName"
              placeholder="Last Name (required)"
            />
            <Input
              onChange={handleInputChange}
              name="userName"
              placeholder="User Name (required)"
            />
            <Input
              onChange={handleInputChange}
              name="phoneNum"
              placeholder="Phone Number(required)"
            />
            <Password
              onChange={handleInputChange}
              name="password"
              placeholder="Password(required)"
            />
            <FormBtn
              disabled={
                !(
                  formObject.firstName &&
                  formObject.lastName &&
                  formObject.userName &&
                  formObject.phoneNum &&
                  formObject.password
                )
              }
              onClick={handleFormSubmit}
            >
              Submit
            </FormBtn>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
