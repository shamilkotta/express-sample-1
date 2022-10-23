const express = require("express");
const books = require("../utils/books.json");

const router = express.Router();

router.get("/cards", (req, res) => {
  res.render("cards", { layout: "index", books });
});

module.exports = router;
