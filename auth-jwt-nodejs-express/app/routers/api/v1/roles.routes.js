const express = require("express");
const router = express.Router();

const rolesController = require("../../../controllers/roles.controllers");

router.post("", rolesController.create);
router.get("/:id", rolesController.getById);
router.get("", rolesController.getAll);

module.exports = router;
