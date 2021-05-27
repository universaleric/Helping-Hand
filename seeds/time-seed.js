const { Time } = require("../models");

const timeData = [
  {
    hour: '6pm'
  },
 
];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;
