const CommentModel = require("../models/comment");
const PostModel = require("../models/post");
const NotificationModel = require("../models/notification");

exports.commentPost = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    const userId = req.user._id;
    const postExist = await PostModel.findById(postId).populate("user");
    if (!postExist) {
      return res.status(404).json({ message: "Post not found" });
    }

    postExist.comments = postExist.comments + 1;
    await postExist.save();

    const newComment = new CommentModel({
      user: userId,
      post: postId,
      comment,
    });
    await newComment.save();

    const populateComment = await CommentModel.findById(
      newComment._id
    ).populate("user", "f_name headline profilePic");

    const content = `${req.user.f_name} left a comment on your post`;
    const notification = new NotificationModel({
      sender: userId,
      receiver: postExist.user._id,
      content,
      type: "comment",
      postId: postId.toString(),
    });
    await notification.save();

    res.status(200).json({
      message: "Comment added successfully",
      comment: populateComment,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getCommentById = async (req, res) => {
  try {
    const { postId } = req.params;
    const isPostExist = await PostModel.findById(postId);
    if (!isPostExist) {
      return res.status(400).json({ error: "Post does not exist" });
    }
    const comments = await CommentModel.find({ post: postId })
      .sort({ createdAt: -1 })
      .populate("user", "f_name headline profilePic");
    return res
      .status(201)
      .json({ message: "Comments retrieved successfully", comments: comments });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
