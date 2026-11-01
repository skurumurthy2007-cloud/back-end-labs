
const express = require("express");

const app = express();

// GET / - Home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my S BALAJI NAYUDU server! The Server is running Succesfully");
});

// GET /about - Name and section
app.get("/about", (req, res) => {
    res.status(200).json({
        name: "S BALAJI NAYUDU",
        section: "CSE(QE) - 2B - 204"
    });
});

// GET /time - Current date and time
app.get("/time", (req, res) => {
    res.status(200).json({
        currentTime: new Date()
    });
});

// 404 handler for unknown paths
app.use((req, res) => {
    res.status(404).send("404 - Page not found @ The page is not found due to it is not built it is under development");
});

// Start the server
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});
