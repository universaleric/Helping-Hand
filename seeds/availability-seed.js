const { Availability } = require('../models');

const availabilityData = [

    {
        user_id: []
    },
    {
        day_id: []
    },
    {
        time_id: []
    },

];

const seedAvailability = () => Availability.bulkCreate(availabilityData);

module.exports = seedAvailability;