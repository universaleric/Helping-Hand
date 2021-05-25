const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');


class Profile extends Model {
    render() {
    return(
        <div>
            <h1>Inbox</h1>
                <ul className="header">
                    <li><a href='/inbox'>{userName.props}<strong>Inbox</strong></a></li>
                    <li><a href='/availability'>{userName.availability.props}Availability</a></li>
                    <li><a href='./models/skills.js'>{userName.skill.props}Skills</a></li>
                    <li><a href='./models/userskill.js'> <button className="search helping hand">Find a Helping Hand!</button>{userName.userskill.props}!</a></li>
                </ul>
        </div>
        );
    };
}


export default Profile;

