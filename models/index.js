const Day = require("./day");
const Message = require("./message");
const Skill = require("./skill");
const User = require("./User");
const Time = require("./time");
const Availability = require("./time");
const Userskill = require("./time");

Availability.belongsTo(Day, {
  foreignKey: "day_id",
});
Availability.belongsTo(Time, {
  foreignKey: "time_id",
});

Availability.hasMany(User, {
  foreignKey: "user_id",
});

// Message.belongsTo(User, {
//   foreignKey: "message_id",
// });
// Userskill.belongsTo(Skill, {
//   foreignKey: "skills_id",
// });
Userskill.hasMany(User, {
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
