const { Message } = require('../models');

const messageData = [

    {
        messages: ""
    },

];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;