const { Time } = require('../models');

const timeData = [

    {
        times: []
    },

];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;