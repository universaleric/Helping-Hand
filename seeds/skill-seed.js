const { Skill } = require("../models");

const skillData = [
  { skills_name: "plumbing" },
  { skills_name: "painting" },
  { skills_name: "stain removal" },
  { skills_name: "folding clothes" },
  { skills_name: "electrical" },
  { skills_name: "cleaning clothes" },
];

const seedSkill = () => Skill.bulkCreate(skillData);

module.exports = seedSkill;
