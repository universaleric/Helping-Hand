const { User } = require('../models');

const userData = [

    {
        first_name: "john",
    },
    {
        last_name: "doe",
    },
    {
        email: "johndoe@yahoo.com",
    },
    {
        username: "usernametest",
    },
    {
        password: "n/a",
    },
    {
        message_id: []
    },
    //handcounter?

];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;