const router = require("express").Router();
const userRoutes = require("./userRoutes");
const userSkillRoutes = require("./userSkillRoutes");

router.use("/users", userRoutes);
router.use("/userSkill", userSkillRoutes);

module.exports = router;
