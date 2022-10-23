const express = require("express");
const books = require("../utils/books.json");
const gallery = require("../utils/gallery.json");

const router = express.Router();

router.get("/cards", (req, res) => {
  res.render("cards", { layout: "index", books });
});

router.get("/table", (req, res) => {
  res.render("table", {
    layout: "index",
    books,
    helpers: {
      indexNum: (val) => val + 1,
    },
  });
});

router.get("/gallery", (req, res) => {
  res.render("gallery", { layout: "index", gallery });
});

module.exports = router;
