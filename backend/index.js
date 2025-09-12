require("dotenv").config();
require("./connection");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const UserRoutes = require("./routes/user");
const PostRoutes = require("./routes/post");
const NotificationRoutes = require("./routes/notification");
const CommentRoutes = require("./routes/comment");
const ConversationRoutes = require("./routes/conversation");
const MessageRoutes = require("./routes/message");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "http://localhost:5173", methods: ["GET", "POST"] },
});

io.on("connection", (socket) => {
  console.log("User joined");

  socket.on("joinConversation", (conversationId) => {
    console.log(`User has joined the conversation with ID ${conversationId}`);
    socket.join(conversationId);
  });

  socket.on("sendMessage", (convId, messageDetail) => {
    console.log("Message successfully sent");
    io.to(convId).emit("receiveMessage", messageDetail);
  });
});

const PORT = process.env.PORT || 1478;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/api/auth", UserRoutes);
app.use("/api/post", PostRoutes);
app.use("/api/notification", NotificationRoutes);
app.use("/api/comment", CommentRoutes);
app.use("/api/conversation", ConversationRoutes);
app.use("/api/message", MessageRoutes);

app.get("/", (req, res) => {
  res.send("You belong with me... in the system.");
});

server.listen(PORT, () => {
  console.log(`🎤 Server's in its Lover era on port ${PORT} 💖`);
});
