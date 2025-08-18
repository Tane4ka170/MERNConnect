const express = require("express");
const router = express.Router();
const Authentication = require("../authentication/auth");
const PostController = require("../controller/post");

router.post("/", Authentication.auth, PostController.addPost);
router.post(
  "/likeDislike",
  Authentication.auth,
  PostController.likeDislikePost
);

router.get("/getAllPosts", PostController.getAllPosts);

module.exports = router;
