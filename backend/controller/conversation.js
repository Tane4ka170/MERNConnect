const ConversationModel = require("../models/conversation");
const MessageModel = require("../models/message");

exports.addConversation = async (req, res) => {
  try {
    let senderId = req.user._id;
    let { receiverId, message } = req.body;
    let isConvExist = await ConversationModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (!isConvExist) {
      let newConversation = new ConversationModel({
        members: [senderId, receiverId],
      });
      await newConversation.save();
      let addMessage = new MessageModel({
        sender: req.user._id,
        conversation: newConversation._id,
        message,
      });
      await addMessage.save();
    } else {
      let addMessage = new MessageModel({
        sender: req.user._id,
        conversation: newConversation._id,
        message,
      });
      await addMessage.save();
    }

    return res.status(201).json({ message: "Message delivered" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getConversation = async (req, res) => {
  try {
    let loggedId = req.user._id;
    let conversation = await ConversationModel.find({
      members: $in[loggedId],
    })
      .populate("members", "-password")
      .sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ message: "Retrieved successfully", conversation: conversation });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
