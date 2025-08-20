const express = require("express");
const router = express.Router();
const UserController = require("../controller/user");
const Authentication = require("../authentication/auth");

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/google", UserController.loginTroughGmail);
router.post("/logout", Authentication.auth, UserController.logout);
router.post(
  "/sendFriendReq",
  Authentication.auth,
  UserController.sendFriendRequest
);

router.get("/self", Authentication.auth, (req, res) => {
  return res.status(200).json({ user: req.user });
});
router.get("/user/:id", UserController.getProfileById);
router.get("/findUser", Authentication.auth, UserController.findUser);

router.put("/update", Authentication.auth, UserController.updateUser);

module.exports = router;
