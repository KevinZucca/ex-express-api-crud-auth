const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");
const validator = require("../middlewares/validator");
const { paramID, bodyControl } = require("../validations/posts");
const verifyUser = require("../middlewares/verifyUser");

router.get("/", postsController.index);
router.post("/", verifyUser, validator(bodyControl), postsController.create);
router.get("/:slug", validator(paramID), postsController.show);
router.put("/:slug", verifyUser, validator(paramID), postsController.update);
router.delete(
  "/:slug",
  verifyUser,
  validator(paramID),
  postsController.destroy
);

module.exports = router;
