const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tags");

router.post("/", tagsController.create);

module.exports = router;
