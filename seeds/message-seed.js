const { Message } = require('../models');

const messageData = [

];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;