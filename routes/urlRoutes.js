const express = require("express");
const router = express.Router();
const shortenUrl = require("../controllers/urls/shortenUrlController");
const redirectUrl = require("../controllers/urls/redirectUrlController");
const unshortenUrl = require("../controllers/urls/unshortenUrlController");

router.post("/shorten", shortenUrl);
router.post("/unshorten", unshortenUrl);
router.get("/:short_url", redirectUrl);

module.exports = router