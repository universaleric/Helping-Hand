const router = require("express").Router();
const { Userskill } = require("../../models");


router.post("/", async (req, res) => {
  try {
    const userskillData = await Userskill.create(req.body);
    console.log(userskillData);

    
    res.status(200).json(userskillData);
    
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;