const jwt = require("jsonwebtoken");
const User = require("../models/user");

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

exports.auth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res
        .status(400)
        .json({ error: "Authorization denied: token missing" });
    }
    const decode = jwt.verify(token, JWT_SECRET_KEY);
    req.user = await User.findById(decode.userId).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid authentication token" });
  }
};
