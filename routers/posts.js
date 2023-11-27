const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const validator = require("../middlewares/validator");
const { paramID, bodyControl } = require("../validations/posts");

router.get("/", postsController.index);
router.post("/", validator(bodyControl), postsController.create);
router.get("/:slug", validator(paramID), postsController.show);
router.put("/:slug", validator(paramID), postsController.update);
router.delete("/:slug", validator(paramID), postsController.destroy);

module.exports = router;
