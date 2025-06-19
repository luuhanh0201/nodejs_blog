const path = require("path");
const express = require("express");
// const morgan = require("morgan");
const handlebars = require("express-handlebars");
const post = 3000;
const app = express();
const route = require("./routes/index.js");
const db = require("./config/db");
const methodOverride = require("method-override");
const SortMiddleware = require("./app/middlewares/SortMiddleware.js")

app.use(SortMiddleware)

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Connect to database
db.connect();
app.use(express.static(path.join(__dirname, "public")));
// Morgan is a logging library for Node.js that provides HTTP request logging
// app.use(morgan("combined"));
app.engine("handlebars", handlebars());

// Handlebars setup
app.engine(
    "hbs",
    handlebars({
        extname: ".hbs",
        helpers: {
            sum: (a, b) => a + b,
            sortable:(field,sort)=>{
                const sortType = field === sort.column ? sort.type : "default"


                const icons = {
                    default:'fa-solid fa-right-left fa-rotate-90',
                    asc:'fa-solid fa-chevron-up',
                    desc:'fa-solid fa-chevron-down'
                }
                const icon = icons[sortType]

                const types = {
                    default : "desc",
                    desc:"asc",
                    asc:"desc"
                }
                const type = types[sortType]
                return `
                <a href="?_sort&column=${field}&type=${type}"><i class="${icon}"></i></a>
                `
            }
        },
    }),
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));
app.use(methodOverride("_method"));
// rote
route(app);

app.listen(post, () => {
    console.log(`Server is running on http://localhost:${post}`);
});
