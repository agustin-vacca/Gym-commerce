const nodemailer = require("nodemailer");
const { MAILER_EMAIL, MAILER_PASSWORD } = process.env;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: MAILER_EMAIL, // generated ethereal user
    pass: MAILER_PASSWORD, // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Conectao el nodemailer mijo");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = transporter;
