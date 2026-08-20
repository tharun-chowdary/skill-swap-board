const express = require("express");

const skillController = require("../controllers/skillController");

const router = express.Router();

router.get("/", skillController.getAllSkills);

router.get("/:id", skillController.getSkillById);

router.post("/", skillController.createSkill);

router.delete("/:id", skillController.deleteSkill);

module.exports = router;