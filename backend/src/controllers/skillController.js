const skillService = require("../services/skillService");

const getAllSkills = (req, res) => {
    const skills = skillService.getAllSkills();

    res.json(skills);
};

const getSkillById = (req, res) => {
    const id = Number(req.params.id);

    const skill = skillService.getSkillById(id);

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
    const id = Number(req.params.id);

    const deleted = skillService.deleteSkill(id);

    if (!deleted) {
        return res.status(404).json({
            message: "Skill not found"
        });
    }

    res.json({
        message: "Skill deleted successfully"
    });
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    deleteSkill
};