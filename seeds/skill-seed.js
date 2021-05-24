const { Skill } = require('../models');

const skillData = [

];

const seedSkill = () => Skill.bulkCreate(skillData);

module.exports = seedSkill;