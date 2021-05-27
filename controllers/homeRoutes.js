const router = require("express").Router();
const { User, user } = require("../models");
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

// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//     try {
//       // Find the logged in user based on the session ID
//       const userData = await User.findByPk(req.session.user_id, {
//         attributes: { exclude: ['password'] },
//       });

//       const user = userData.get({ plain: true });

//       res.render('profile', {
//         ...user,
//         logged_in: true,
//       });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
