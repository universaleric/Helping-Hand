const { Time } = require('../models');

const timeData = [

];

const seedTime = () => Time.bulkCreate(timeData);

module.exports = seedTime;