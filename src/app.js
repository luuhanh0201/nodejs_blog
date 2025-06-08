const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const post = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Morgan is a logging library for Node.js that provides HTTP request logging
app.use(morgan("combined"));
app.engine("handlebars", handlebars());

// Handlebars setup
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// rote

app.get("/", (req, res) => {
    res.render("home");
});
app.get("/news", (req, res) => {
    res.render("news");
});
app.listen(post, () => {
    console.log(`Server is running on http://localhost:${post}`);
});
