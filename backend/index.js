const express = require("express");
const app = express();

require("./connection");

app.get("/", (req, res) => {
  res.send("You belong with me... in the system.");
});

app.listen(1478, () => {
  console.log("🎤 Server's in its Lover era on port 1478 💖");
});
