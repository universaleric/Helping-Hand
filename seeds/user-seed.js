const { User } = require("../models");

const userData = [
  {
    first_name: "john",

    last_name: "doe",

    phone_number: "345-345-2345",

    username: "usernametest",

    password: "password",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
