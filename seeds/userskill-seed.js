const { Userskill } = require("../models");

const userSkillData = [
  {
    user_id: [],
  },
  {
    skills_id: [],
  },
];

const seedUserSkill = () => Userskill.bulkCreate(userSkillData);

module.exports = seedUserSkill;
