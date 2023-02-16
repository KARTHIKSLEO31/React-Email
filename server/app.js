const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({extended: true}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  next();
});


app.post('/send_email', (req, res) => {
  const { email,subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.YOUR_EMAIL_ADDRESS,
      pass: process.env.YOUR_EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.YOUR_EMAIL_ADDRESS,
    to: email,
    subject: subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});