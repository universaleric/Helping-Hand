const Day = require("./day");
const Message = require("./message");
const Skill = require("./skill");
const User = require("./User");
const Time = require("./time");
const Availability = require("./availability");
const Userskill = require("./userskill");

Availability.belongsTo(Day, {
  foreignKey: "day_id",
});
Availability.belongsTo(Time, {
  foreignKey: "time_id",
});

Availability.belongsTo(User, {
  foreignKey: "user_id",
});

Message.belongsTo(User, {
  foreignKey: "user_id",
});

Userskill.belongsTo(Skill, {
  foreignKey: "skills_id",
});
Userskill.belongsTo(User, {
  foreignKey: "user_id",
});
module.exports = {
  Day,
  Message,
  Skill,
  User,
  Time,
  Availability,
  Userskill,
};
