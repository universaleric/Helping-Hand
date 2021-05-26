const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

function Profile(event) {
  return (
    <div>
      <div className="header">
        <div>
          <div>
            <strong>Hello, {userName.props}</strong>
            <button type="button" class="btn btn-inbox">
              View Inbox
            </button>
          </div>
          <div>
            <a href="/availability">
              {userName.availability.props}Availability // needs to be formatted with the grid//
            </a>
          </div>
          <li>
            <a href="./models/skills.js">{userName.skill.props}Skills</a>
          </li>
          <li>
            <a href="./models/userskill.js">
            {" "}
            <button type="button" class="btn btn-success">
                Success
            </button>
            {userName.userskill.props}!
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Profile;
