const PostModel = require("../models/post");

exports.addPost = async (req, res) => {
  try {
    const { desc, imageLink } = req.body;
    const userId = req.user._id;

    const addPost = new PostModel({ user: userId, desc, imageLink });
    if (!addPost) {
      return res.status(400).json({ error: "An error occurred" });
    }
    await addPost.save();
    return res
      .status(200)
      .json({ message: "Post submitted successfully", post: addPost });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.likeDislikePost = async (req, res) => {
  try {
    let selfId = req.user._id;
    let { postId } = req.body;
    let post = await PostModel.findById(postId);
    if (!post) {
      return res.status(400).json({ error: "Post not available" });
    }
    const index = post.likes.findIndex((id) => id.equals(selfId));
    if (index !== -1) {
      post.likes.splice(index, 1);
    } else {
      post.likes.push(selfId);
    }

    await post.save();
    res.status(200).json({
      message: index !== 1 ? "Post disliked" : "Post liked",
      likes: post.likes,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
