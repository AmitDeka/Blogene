const express = require("express");
// const session = require("express-session");
const adminRouter = express.Router();

const adminController = require("../controller/controllerAdmin");

adminRouter.get("/", adminController.websiteSetup);

module.exports = adminRouter;
