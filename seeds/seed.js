// const seedAvailability = require("./availability-seed");
const seedDay = require("./day-seed");
const seedMessage = require("./message-seed");
const seedSkill = require("./skill-seed");
const seedTime = require("./time-seed");
const seedUser = require("./user-seed");
const seedUserSkill = require("./userskill-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  console.log("\n----- DATABASE SYNCED -----\n");

  // await seedAvailability();
  // console.log("\n----- SEEDED -----\n");
  await seedDay();
  console.log("\n----- SEEDED -----\n");
  await seedMessage();
  console.log("\n----- SEEDED -----\n");
  await seedSkill();
  console.log("\n----- SEEDED -----\n");
  await seedTime();
  console.log("\n----- SEEDED -----\n");
  await seedUser();
  console.log("\n----- SEEDED -----\n");
  await seedUserSkill();
  console.log("\n----- SEEDED -----\n");

  process.exit(0);
};

seedAll();
