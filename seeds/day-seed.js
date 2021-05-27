const { Day } = require("../models");

const dayData = [
  {
    days: "Sunday",
    days: "Monday",
    days: "Tuesday",
    days: "Wednesday",
    days: "Thursday",
    days: "Friday",
    days: "Saturday",
  },
];

const seedDay = () => Day.bulkCreate(dayData);

module.exports = seedDay;
