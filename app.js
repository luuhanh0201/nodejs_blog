const express = require("express");
const app = express();
const post = 3000;

// rote
app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(post, () => {
    console.log(`Server is running on http://localhost:${post}`);
});
