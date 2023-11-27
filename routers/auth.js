const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const validator = require("../middlewares/validator");
const auth = require("../validations/auth");

router.post("/register", validator(auth), authController.register);

module.exports = router;
