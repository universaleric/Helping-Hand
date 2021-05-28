const { Time } = require("../models");

const timeData = [
  { hour: "8:00AM" },
  { hour: "9:00AM" },
  { hour: "10:00AM" },
  { hour: "11:00AM" },
  { hour: "12:00PM" },
  { hour: "1:00PM" },
  { hour: "2:00PM" },
  { hour: "3:00PM" },
  { hour: "4:00PM" },
  { hour: "5:00PM" },
  { hour: "6:00PM" },
  { hour: "7:00PM" },
  { hour: "8:00PM" },
];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;
