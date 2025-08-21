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
router.post(
  "/acceptFriendRequest",
  Authentication.auth,
  UserController.acceptFriendRequest
);

router.get("/self", Authentication.auth, (req, res) => {
  return res.status(200).json({ user: req.user });
});
router.get("/user/:id", UserController.getProfileById);
router.get("/findUser", Authentication.auth, UserController.findUser);
router.get("/friendsList", Authentication.auth, UserController.getFriendsList);
router.get(
  "/pendingFriendsList",
  Authentication.auth,
  UserController.getPendingFriendsList
);

router.put("/update", Authentication.auth, UserController.updateUser);

router.delete(
  "/removeFromFriendList/:friendId",
  Authentication.auth,
  UserController.removeFromFriendList
);

module.exports = router;
