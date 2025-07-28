const express = require("express");
const multer = require("multer");
const cors = require("cors");

const app = express();

app.use(cors());
const upload = multer();

app.post("/contact", upload.none(), (req, res) => {
  // console.log("data received");
  console.log("before");
  
  console.log(req.body);
  console.log("after");

  const { email, subject, message } = req.body;

  res.json({ message: "Message received!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
