require("dotenv").config();
require("./connection");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const UserRoutes = require("./routes/user");
const PostRoutes = require("./routes/post");
const NotificationRoutes = require("./routes/notification");
const CommentRoutes = require("./routes/comment");

const PORT = process.env.PORT || 1478;

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/notification", NotificationRoutes);
app.use("/api/comment", CommentRoutes);

app.get("/", (req, res) => {
  res.send("You belong with me... in the system.");
});

app.listen(1478, () => {
  console.log(`🎤 Server's in its Lover era on port ${PORT} 💖`);
});
