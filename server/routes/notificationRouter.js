const express = require("express");
const auth = require("../middleware/auth");
const notificationController = require("../controllers/notificationController");

const notificationRouter = express.Router();

notificationRouter.get(
  "/api/getallnotifs",
  auth,
  notificationController.getallnotifs
);

module.exports = notificationRouter;
