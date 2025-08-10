require("dotenv").config();
const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then((res) => {
    console.log("💖 Database and server? It's a love story, baby just say yes");
  })
  .catch((err) => {
    console.log(err);
  });
