const express = require("express");
const router = express.Router();
const Authentication = require("../authentication/auth");
const ConversationController = require("../controller/conversation");

router.post(
  "/add-conversation",
  Authentication.auth,
  ConversationController.addConversation
);

module.exports = router;
