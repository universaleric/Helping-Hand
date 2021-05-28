const router = require("express").Router();
const { Skill, skill } = require("../models");
const { Day, day } = require("../models");
const { Time, time } = require("../models");
const { User, user } = require("../models");
const { Userskill, userSkills } = require("../models");
const withAuth = require("../utils/auth");

router.get("/skills", async (req, res) => {
  try {
    // Get all skills
    const skillsData = await Skill.findAll({});

    // Serialize data so the template can read it
    const skills = skillsData.map((skill) => skill.get({ plain: true }));

    res.json(skills);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/day", async (req, res) => {
  try {
    // Get all days
    const dayData = await Day.findAll({});

    // Serialize data so the template can read it
    const days = dayData.map((day) => day.get({ plain: true }));

    res.json(days);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/time", async (req, res) => {
  try {
    // Get all times
    const timeData = await Time.findAll({});

    // Serialize data so the template can read it
    const times = timeData.map((time) => time.get({ plain: true }));

    res.json(times);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    // Get all users
    const usersData = await User.findAll({});

    // Serialize data so the template can read it
    const users = usersData.map((user) => user.get({ plain: true }));

    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/userSkills", async (req, res) => {
  try {
    // Get all users
    const userSkillsData = await Userskill.findAll({});

    // Serialize data so the template can read it
    const userSkills = userSkillsData.map((userSkill) =>
      userSkill.get({ plain: true })
    );

    res.json(userSkills);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/userSkills/:id", async (req, res) => {
  try {
    const userSkillsIdData = await Userskill.findAll({
      where: {
        user_id: req.params.id,
      },
    });

    console.log(userSkillsIdData);
    // const questions = quizData.get({ plain: true });
    const userSkills = userSkillsIdData.map((userSkill) =>
      userSkill.get({ plain: true })
    );

    console.log(userSkills);

    res.json(userSkills);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/skillsList/:id", async (req, res) => {
  try {
    const skillsListData = await Skill.findAll({
      where: {
        id: req.params.id,
      },
    });

    console.log(skillsListData);

    const profileSkills = skillsListData.map((profileSkill) =>
      profileSkill.get({ plain: true })
    );
    console.log(profileSkills);

    const skillsName = profileSkills.map((skillName) => skillName.skills_name);
    console.log(skillsName);

    res.json(skillsName);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
