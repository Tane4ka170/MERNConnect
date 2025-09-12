const User = require("../models/user");
const NotificationModel = require("../models/notification");
const bcryptjs = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");

const cookieOptions = {
  httpOnly: true,
  secure: false, //true in production,
  sameSite: "Lax", //None in production
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.register = async (req, res) => {
  try {
    let { email, password, f_name } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(409).json({
        error:
          "An account with this email already exists. Please use a different email",
      });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, f_name });
    await newUser.save();
    return res.status(201).json({
      message: "User signup completed successfully",
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists && !userExists.password) {
      return res.status(400).json({ error: "Kindly sign in using your email" });
    }
    if (userExists && (await bcryptjs.compare(password, userExists.password))) {
      let token = jwt.sign({ userId: userExists._id }, JWT_SECRET_KEY);
      res.cookie("token", token, cookieOptions);
      return res.json({
        message: "Login completed successfully",
        success: true,
        userExists,
      });
    } else {
      return res.status(400).json({ error: "Incorrect login details" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.loginTroughGmail = async (req, res) => {
  try {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const { sub, email, name, picture } = payload;

    const userExists = await User.findOne({ email });
    if (!userExists) {
      //Create a new account
      userExists = await User.create({
        googleId: sub,
        email,
        f_name: name,
        profile_pic: picture,
      });
    }
    let jwtToken = jwt.sign({ userId: userExists._id }, JWT_SECRET_KEY);
    res.cookie("token", jwtToken, cookieOptions);
    res.status(200).json({
      user: userExists,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    const isExist = await User.findById(req.user._id);
    if (!isExist) {
      return res.status(404).json({ error: "User does not exist" });
    }
    const updatedData = await User.findByIdAndUpdate(isExist._id, user);
    console.log(updatedData);
    const userData = await User.findById(req.user._id);
    res.status(200).json({
      message: "User details updated successfully",
      user: userData,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getProfileById = async (req, res) => {
  try {
    const { id } = req.params;
    const isExist = await User.findById(id);
    if (!isExist) {
      return res.status(404).json({ error: "No matching user found" });
    }
    res.status(200).json({
      message: "User retrieved successfully",
      user: isExist,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.logout = async (req, res) => {
  res.clearCookie("token", cookieOptions).json({
    message: "Signed out successfully",
  });
};

exports.findUser = async (req, res) => {
  try {
    let { query } = req.query;
    console.log(query);
    const users = await User.find({
      $and: [
        { _id: { $ne: req.user._id } },
        {
          $or: [
            { name: { $regex: new RegExp(`^${query}`, "i") } },
            { email: { $regex: new RegExp(`^${query}`, "i") } },
          ],
        },
      ],
    });
    return res.status(201).json({
      message: "Member retrieved successfully",
      users: users,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.sendFriendRequest = async (req, res) => {
  try {
    const sender = req.user._id;
    const { receiver } = req.body;

    const userExist = await User.findById(receiver);
    if (!userExist) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const index = req.user.friends.findIndex((id) => id.equals(receiver));
    if (index !== -1) {
      return res.status(400).json({ error: "Already in friends list" });
    }

    const lastIndex = userExist.pending_friends.findIndex((id) =>
      id.equals(req.user._id)
    );
    if (lastIndex !== -1) {
      return res.status(400).json({ error: "Request already submitted" });
    }

    userExist.pending_friends.push(sender);
    let content = `${req.user.name} invited you to connect`;
    const notification = new NotificationModel({
      sender,
      receiver,
      content,
      type: "friendRequest",
    });
    await userExist.save();

    return res.status(200).json({
      message: "Connection request sent",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.acceptFriendRequest = async (req, res) => {
  try {
    let { friendId } = req.body;
    let selfId = req.user._id;

    const friendData = await User.findById(friendId);
    if (!friendData) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const index = friendData.pending_friends.findIndex((id) =>
      id.equals(selfId)
    );

    if (index === -1) {
      return res.status(400).json({ error: "No request found from this user" });
    }

    friendData.pending_friends.splice(index, 1);

    req.user.friends.push(friendId);
    friendData.friends.push(selfId);

    let content = `${req.user.f_name} accepted your friend request`;
    const notification = new NotificationModel({
      sender: selfId,
      receiver: friendId,
      content,
      type: "friendRequest",
    });
    await notification.save();

    await friendData.save();
    await req.user.save();

    return res.status(200).json({
      message: "You are now friends",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getFriendsList = async (req, res) => {
  try {
    let friendList = await req.user.populate("friends");
    return res.status(200).json({
      friends: friendList.friends,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.getPendingFriendsList = async (req, res) => {
  try {
    let pendingFriendsList = await req.user.populate("pending_friends");
    return res.status(200).json({
      pendingFriends: pendingFriendsList.pending_friends,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};

exports.removeFromFriendList = async (req, res) => {
  try {
    let selfId = req.user._id;
    let { friendId } = req.params;

    const friendData = await User.findById(friendId);
    if (!friendData) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const index = req.user.friends.findIndex((id) => id.equals(friendId));
    const friendIndex = friendData.friends.findIndex((id) => id.equals(selfId));
    if (index !== -1) {
      req.user.friends.splice(index, 1);
    } else {
      return res.status(400).json({ error: "No request found from this user" });
    }

    if (friendIndex !== -1) {
      friendData.friends.splice(friendIndex, 1);
    } else {
      return res.status(400).json({ error: "No request found from this user" });
    }

    await req.user.save();
    await friendData.save();

    return res.status(200).json({ message: "You are no longer connected" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal server error", message: error.message });
  }
};
