const express = require("express");
const router = express.Router();
const Authentication = require("../authentication/auth");
const CommentController = require("../controller/comment");

router.post("/", Authentication.auth, CommentController.commentPost);

module.exports = router;
