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
    return res.status(200).json({
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
    let posts = await PostModel.find()
      .sort({ createdAt: -1 })
      .populate("user", "-password");
    return res.status(200).json({ message: "Data retrieved", posts: posts });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getPostByPostId = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await PostModel.findById(postId).populate("user", "-password");
    if (!post) {
      return res.status(400).json({ error: "Post does not exist" });
    }
    return res.status(200).json({ message: "Data retrieved", post: post });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getTop5PostForUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await PostModel.find({ user: userId })
      .sort({
        createdAt: -1,
      })
      .populate("user", "-password")
      .limit(5);
    return res.status(200).json({ message: "Data retrieved", posts: posts });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getAllPostByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const posts = await PostModel.find({ user: userId })
      .sort({
        createdAt: -1,
      })
      .populate("user", "-password");
    return res.status(200).json({ message: "Data retrieved", posts: posts });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
