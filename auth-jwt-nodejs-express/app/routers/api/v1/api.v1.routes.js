const express = require("express");
const router = express.Router();

const services = require("./services.routes");

router.use(services);

module.exports = router;
