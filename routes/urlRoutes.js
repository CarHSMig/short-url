const express = require("express");
const router = express.Router();
const shortenUrl = require("../controllers/urls/shortenUrlController");
const redirectUrl = require("../controllers/urls/redirectUrlController");

router.post("/shorten", shortenUrl);
router.get("/:short_url", redirectUrl);

module.exports = router