const express = require("express");
const users = require("../models/userSchema");
const nodemailer = require("nodemailer");

const router = new express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

router.post("/register", async (req, res) => {
  const { fName, lName, email, mobile, message } = req.body;
  console.log("the data is", req.body);

  if (!fName || !lName || !email || !mobile) {
    res.status(401).json({ status: 401, message: "All Inputs Required." });
  } else {
    try {
      const preUser = await users.findOne({ email: email });
      if (preUser) {
        const userMessage = await preUser.saveMessage(message);

        //sending mail to user
        const mailOptions = {
          from: process.env.USER,
          to: email,
          subject: "Confirmation of Receiving Response",
          text: "Your Response has been Submitted and received, Thankh you.",
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
          } else {
            console.log("Email sent" + info.response);
          }
        });
        //sending back response
        res.status(201).json({
          status: 201,
          message:
            "email and user exists, so message saved in DB and email sent",
        });
      } else {
        const finalUser = new users({
          fName,
          lName,
          email,
          mobile,
          messages: [{ message }],
        });
        const dataStored = await finalUser.save();

        //sending mail to user
        const mailOptions = {
          from: process.env.USER,
          to: email,
          subject: "Confirmation of Receiving Response",
          text: "Your Response has been Submitted and received, Thankh you.",
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log("error", error);
          } else {
            console.log("Email sent" + info.response);
          }
        });

        res.status(201).json({
          status: 201,
          message: "user saved in DB and email sent",
        });
      }
    } catch (error) {
      console.log("Error while saving data in db", error);
      res.status(401).json({
        status: 401,
        message: "Error while saving data in db",
        error: error,
      });
    }
  }
});

module.exports = router;
