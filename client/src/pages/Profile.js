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
        <div>
          <a href="/availability">
            {userName.availability}Availability // needs to be formatted
            with the grid//
          </a>
        </div>
        <li>
          <a href="./models/skills.js">{userName.skill}Skills</a>
        </li>
        <li>
          <a href="./models/userskill.js">
            {" "}
            <button type="button" class="btn btn-success">
              Success
            </button>
            {userName.userskill}!
          </a>
        </li>
    </Container>
  );
}

export default Profile;
