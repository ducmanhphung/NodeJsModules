const express = require("express");
const router = express.Router();

const users = require("./users.routes");
const roles = require("./roles.routes");
const auth = require("./auth.routes");

router.use("/users", users);
router.use("/roles", roles);
router.use("/auth", auth);

module.exports = router;
