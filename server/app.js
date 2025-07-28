const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { LOGIN, createTransporter } = require("./config");

const app = express();

app.use(cors());
const upload = multer();

app.post("/contact", upload.none(), (req, res) => {
  console.log(req.body);

  const { email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: LOGIN,
    subject: subject,
    text: `From ${email} \n\n${message}`,
    replyTo: email,
  };

  createTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });

  res.json({ message: "Message received!" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
