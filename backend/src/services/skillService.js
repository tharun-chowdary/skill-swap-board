let skills = [
    {
        id: 1,
        name: "Guitar",
        category: "Music"
    },
    {
        id: 2,
        name: "Excel",
        category: "Technology"
    },
    {
        id: 3,
        name: "Cooking",
        category: "Lifestyle"
    }
];

const getAllSkills = () => {
    return skills;
};

const getSkillById = (id) => {
    return skills.find(skill => skill.id === id);
};

const createSkill = (name, category) => {
    const newSkill = {
        id: skills.length + 1,
        name,
        category
    };

    skills.push(newSkill);

    return newSkill;
};

const deleteSkill = (id) => {
    const skillExists = skills.some(skill => skill.id === id);

    if (!skillExists) {
        return false;
    }

    skills = skills.filter(skill => skill.id !== id);

    return true;
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    deleteSkill
};