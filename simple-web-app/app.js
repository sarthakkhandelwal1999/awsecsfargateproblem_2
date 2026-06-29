const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

// Change this to v2 for the next deployment
const VERSION = "v1";

app.get("/", (req, res) => {
    res.status(200).send(VERSION);
});

app.get("/health", (req, res) => {
    res.status(200).send("OK");
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application ${VERSION} is running on port ${PORT}`);
});
