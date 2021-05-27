const { Availability } = require("../models");

const availabilityData = [
  {
    user_id: 1,

    day_id: 1,

    time_id: 1,
  },
];

const seedAvailability = () => Availability.bulkCreate(availabilityData);

module.exports = seedAvailability;
