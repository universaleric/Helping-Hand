const { Message } = require("../models");

const messageData = [
  {
    messages: "This is a message.",
  },
];

const seedMessage = () => Message.bulkCreate(messageData);

module.exports = seedMessage;
