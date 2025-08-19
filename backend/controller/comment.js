const CommentModel = require("../models/comment");

exports.commentPost = async (req, res, next) => {
  try {
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
