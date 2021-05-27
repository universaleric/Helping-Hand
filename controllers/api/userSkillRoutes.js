const router = require("express").Router();
const { Userskill } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const userskillData = await Userskill.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(userskillData);

    res.status(200).json(userskillData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
