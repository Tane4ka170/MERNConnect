const express = require("express");
const router = express.Router();
const Authentication = require("../authentication/auth");
const PostController = require("../controller/post");

router.post("/", Authentication.auth, PostController.addPost);

module.exports = router;
