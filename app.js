const experss = require("express");
const indexRouter = require("./routes");
const errorHandler = require("./middleware/errorHandling");

const app = experss();

app.use("/", indexRouter);
app.use((req, res, next) => {
  next(new Error("Not found"));
});
app.use(errorHandler);

module.exports = app;