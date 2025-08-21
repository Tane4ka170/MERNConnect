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
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
