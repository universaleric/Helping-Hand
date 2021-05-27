const { Userskill } = require("../models");

const userSkillData = [{}];

const seedUserSkill = () => Userskill.bulkCreate(userSkillData);

module.exports = seedUserSkill;
