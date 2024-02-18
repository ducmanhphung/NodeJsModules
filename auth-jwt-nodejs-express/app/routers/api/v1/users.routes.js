const express = require("express");
const router = express.Router();

const {
  verifyToken,
  isAdmin,
} = require("../../../middlewares/auth.jwt.middleware");

const usersController = require("../../../controllers/users.controllers");

router.post("", usersController.create);
router.get("/:id", usersController.getById);
router.get("", [verifyToken, isAdmin], usersController.getAll);

module.exports = router;
