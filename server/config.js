const nodemailer = require("nodemailer");
require("dotenv").config();

const SERVER = process.env.SMTP_SERVER;
const PORT = process.env.SMTP_PORT;
const LOGIN = process.env.SMTP_LOGIN;
const PASSWORD = process.env.SMTP_PASSWORD;

const createTransporter = nodemailer.createTransport({
  host: SERVER,
  port: PORT,
  auth: {
    user: LOGIN,
    pass: PASSWORD,
  },
});

module.exports = { LOGIN, createTransporter };
