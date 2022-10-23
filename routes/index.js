const express = require("express");
const books = require("../utils/books.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("body", { layout: "index", books });
});

module.exports = router;
