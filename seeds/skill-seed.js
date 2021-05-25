const { Skill } = require('../models');

const skillData = [

    {
        name:"",
    }

];

const seedSkill = () => Skill.bulkCreate(skillData);

module.exports = seedSkill;