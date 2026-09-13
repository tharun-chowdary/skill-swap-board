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
    return skills.find(skill => skill.id === Number(id));
};

const createSkill = (name, category) => {
    const newSkill = {
        id: skills.length + 1,
        name: name,
        category: category
    };

    skills.push(newSkill);

    return newSkill;
};

const deleteSkill = (id) => {
    const index = skills.findIndex(skill => skill.id === Number(id));

    if (index === -1) {
        return null;
    }

    return skills.splice(index, 1)[0];
};

module.exports = {
    getAllSkills,
    getSkillById,
    createSkill,
    deleteSkill
};