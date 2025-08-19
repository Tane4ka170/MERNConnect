const NotificationModel = require("../models/notification");

exports.getNotification = async (req, res) => {
  try {
    let ownId = req.user._id;
    let notifications = await NotificationModel.find({ receiver: ownId })
      .sort({
        createdAt: -1,
      })
      .populate("sender receiver");
    return res.status(200).json({
      message: "Notifications retrieved successfully",
      notifications: notifications,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.updateRead = async (req, res) => {
  try {
    const { notificationId } = req.body;
    const notification = await NotificationModel.findByIdAndUpdate(
      notificationId,
      {
        isRead: true,
      }
    );
    if (!notification) {
      return res.status(404).json({ error: "No notification available" });
    }
    return res.status(200).json({ message: "Mark notification as read" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.activeNotify = async (req, res) => {
  try {
    let ownId = req.user._id;
    let notifications = await NotificationModel.find({
      receiver: ownId,
      isRead: false,
    });

    return res.status(200).json({
      message: "Notification count retrieved successfully",
      count: notifications.length,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
