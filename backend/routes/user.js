const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");
const Authentication = require("../authentication/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/google", UserController.loginTroughGmail);

router.get("/self", Authentication.auth, (req, res) => {
  return res.status(200).json({ user: req.user });
});

module.exports = router;
