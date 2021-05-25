const { Day } = require('../models');

const dayData = [

    {
        days: "",
    },


];

const seedDay = () => Day.bulkCreate(dayData);

module.exports = seedDay;