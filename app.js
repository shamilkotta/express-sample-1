const experss = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const { engine } = require("express-handlebars");

const indexRouter = require("./routes");
const errorHandler = require("./middleware/errorHandling");

const app = experss();

// Setting view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: `${__dirname}/views/`,
  })
);

// Parsers
app.use(experss.json()); // for parsing application/json
app.use(experss.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser()); // coockie parser

// serve form public folder as /static path
app.use("/static", experss.static(path.join(__dirname, "public")));

// Routing
app.use("/", indexRouter);

// 404 & Error handling
app.use((req, res, next) => {
  next(new Error("Not found"));
});
app.use(errorHandler);

module.exports = app;
