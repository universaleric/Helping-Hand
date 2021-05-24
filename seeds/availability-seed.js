const { Availability } = require('../models');

const availabilityData = [

];

const seedAvailability = () => Availability.bulkCreate(availabilityData);

module.exports = seedAvailability;