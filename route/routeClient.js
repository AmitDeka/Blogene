const express = require("express");
// const session = require("express-session");
const clientRouter = express.Router();

const viewHome = require("../controller/controllerClient");

clientRouter.get("/", viewHome.viewHome);

module.exports = clientRouter;
