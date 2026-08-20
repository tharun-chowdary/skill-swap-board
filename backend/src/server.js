const skillRoutes = require("./routes/skillRoutes");

const express = require("express");

const app = express();

const PORT = 5000;

// Middleware
app.use(express.json());
app.use("/api/skills", skillRoutes);
// Test route
app.get("/", (req, res) => {
    res.json({
        message: "Skill-Swap Board API is running"
    });
});

// Health check
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});