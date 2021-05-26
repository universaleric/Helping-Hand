const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

function Profile(event) {
  return (
    <Container fluid>
      <Nav>
        <h1>Helping Hand</h1>
        <p>For when you want to DIY but just need a little help.</p>
      </Nav>
      <h3>Hello, {userName}</h3>
      <button type="button" class="btn btn-inbox">
        View Inbox
      </button>
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
        <a href="./models/skills.js">{userName.skill}Skills</a>
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
