const express = require("express");

const appConfigs = require("./app/configs/app.configs");
const router = require("./app/routers/index.routes");
const bodyParser = require("./app/middlewares/body.parser.middleware");
const errorControllers = require("./app/controllers/error.controllers");

const app = express();

app.use(bodyParser);
app.use(router);
app.use(errorControllers);

app.listen(appConfigs.PORT, () => {
  console.log(`app listen on port: ${appConfigs.PORT}`);
});
