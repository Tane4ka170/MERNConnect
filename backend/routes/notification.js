const express = require("express");
const router = express.Router();
const Authentication = require("../authentication/auth");
const NotificationController = require("../controller/notification");

router.get("/", Authentication.auth, NotificationController.getNotification);
router.get(
  "/activeNotification",
  Authentication.auth,
  NotificationController.activeNotify
);

router.put("/isRead", Authentication.auth, NotificationController.updateRead);

module.exports = router;
