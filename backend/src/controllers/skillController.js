const skillService = require("../services/skillService");

const getAllSkills = (req, res) => {
    const skills = skillService.getAllSkills();

    res.json(skills);
};

const getSkillById = (req, res) => {
    const skill = skillService.getSkillById(req.params.id);

    if (!skill) {
        return res.status(404).json({
            message: "Skill not found"
        });
    }

    res.json(skill);
};

const createSkill = (req, res) => {
    const { name, category } = req.body;

    if (!name || !category) {
        return res.status(400).json({
            message: "Name and category are required"
        });
    }

    const newSkill = skillService.createSkill(name, category);

    res.status(201).json(newSkill);
};

const deleteSkill = (req, res) => {
    const deletedSkill = skillService.deleteSkill(req.params.id);

    if (!deletedSkill) {
        return res.status(404).json({
            message: "Skill not found"
        });
    }

    res.json({
        message: "Skill deleted successfully",
        skill: deletedSkill
    });
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    deleteSkill
};