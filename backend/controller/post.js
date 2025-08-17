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
