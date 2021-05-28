import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import {
  Input,
  Password,
  FormBtn,
  AnimatedMulti,
  AnimatedSunday,
  AnimatedMonday,
  AnimatedTuesday,
  AnimatedWednesday,
  AnimatedThursday,
  AnimatedFriday,
  AnimatedSaturday,
} from "../components/Form";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import API from "../utils/API";

function SignUp(props) {
  const [formObject, setFormObject] = useState({});
  const [skills, setSkills] = useState([]);
  const [days, setDays] = useState([]);
  const [times, setTimes] = useState([]);
  const [skillSelections, setSkillSelections] = useState([]);
  const [daySelections, setDaySelections] = useState([]);
  const [timeSelections, setTimeSelections] = useState([]);

  useEffect(() => {
    loadSkills();
    loadDays();
    loadTimes();
  }, []);

  function loadSkills() {
    API.getSkills()
      .then((res) => {
        setSkills(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadDays() {
    API.getDays()
      .then((res) => {
        setDays(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function loadTimes() {
    API.getTimes()
      .then((res) => {
        setTimes(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  }

  function handleSkillSelection(event) {
    console.log(event);
    console.log("handleSkillselection was called");
    setSkillSelections(
      Array.isArray(event) ? event.map((skill) => skill.value) : []
    );
    console.log(skillSelections);
  }

  function handleDaySelection(event) {
    console.log(event);
    console.log("handleDayselection was called");
    setDaySelections(Array.isArray(event) ? event.map((day) => day.value) : []);
    console.log(daySelections);
  }

  function handleTimeSelection(event) {
    console.log(event);
    console.log("handleTimeselection was called");
    setTimeSelections(
      Array.isArray(event) ? event.map((time) => time.value) : []
    );
    console.log(timeSelections);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    let name = "";
    console.log(formObject);
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
        .then((res) => {
          console.log(res.data);
          sessionStorage.setItem("user_id", res.data.id);
          sessionStorage.setItem("first_name", res.data.first_name);
          console.log(res.data.first_name);
          name = res.data.first_name;
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
    if (skillSelections) {
      skillSelections.map((skills_id) => {
        API.saveUserSkills({ skills_id })
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      });
    }
    // if (daySelections) {
    //   daySelections.map((days_id) => {
    //     API.saveUserDays({ days_id })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err));
    //   });
    // }
    // if (timeSelections) {
    //   timeSelections.map((times_id) => {
    //     API.saveUserTimes({ times_id })
    //       .then((res) => console.log(res))
    //       .catch((err) => console.log(err));
    //   });
    // }
 
      window.location.href = "/profile";
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

            <Link to="login">
              <FormBtn>Return To Login</FormBtn>
            </Link>
          </form>
        </Col>
        <Col size="md-6">
          <h3>
            Please select the skills for which you would consider yourself an
            expert...
          </h3>
          <form>
            <AnimatedMulti
              skills={skills}
              onChange={handleSkillSelection}
            ></AnimatedMulti>
          </form>
          <h3>Please Select Your Availability:</h3>
          <form>
            <AnimatedSunday
              name="Sunday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedSunday>
            <AnimatedMonday
              name="Monday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedMonday>
            <AnimatedTuesday
              name="Tuesday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedTuesday>
            <AnimatedWednesday
              name="Wednesday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedWednesday>
            <AnimatedThursday
              name="Thursday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedThursday>
            <AnimatedFriday
              name="Friday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedFriday>
            <AnimatedSaturday
              name="Saturday"
              times={times}
              onChange={handleTimeSelection}
            ></AnimatedSaturday>

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
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
