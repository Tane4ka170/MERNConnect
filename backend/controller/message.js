const MessageModel = require("../models/message");

exports.sendMessage = async (req, res) => {
  try {
    let { conversation, message, picture } = req.body;
    const addMessage = new MessageModel({
      sender: req.user._id,
      conversation,
      message,
      picture,
    });
    await addMessage.save();
    let populatedMessage = await addMessage.populate("sender");
    return res.status(201).json(populatedMessage);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getMessage = async (req, res) => {
  try {
    let { convId } = req.params;
    let message = await MessageModel.find({ conversation: convId }).populate(
      "sender"
    );

    return res
      .status(200)
      .json({ messages: "Message retrieved successfully", message });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
