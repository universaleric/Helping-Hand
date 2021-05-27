const { Time } = require("../models");

const timeData = [
  {
    hour: "6:00AM",
  },
];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;
