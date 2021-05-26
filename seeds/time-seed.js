const { Time } = require("../models");

const timeData = [
  {
    times: [],
  },
  {
    day_id: [],
  },
  {
    time_id: [],
  },
];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;
