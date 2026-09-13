const express = require("express");

const skillRoutes = require("./routes/skillRoutes");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use("/api/skills", skillRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Skill-Swap Board API is running"
    });
});

app.get("/api/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});