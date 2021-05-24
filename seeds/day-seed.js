const { Day } = require('../models');

const dayData = [

];

const seedDay = () => Day.bulkCreate(dayData);

module.exports = seedDay;