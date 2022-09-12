const express = require("express");
const app = express();
const appointmentmodel = require("../models/Appointment");
const nodemailer = require("nodemailer");

app.post("/api/appointment", async (req, res) => {
  const appointment = appointmentmodel(req.body);

  await appointment
    .save()
    .then((data) => {
      res.send(data._id);
      // mailing.
      let transporter = nodemailer.createTransport({
        service: "hotmail",
        auth: {
          user: "medcare1987@outlook.com",
          pass: "Medcare198",
        },
      });

      let mailOptions = {
        from: "medcare1987@outlook.com",
        to: req.body.mail_id,
        subject: "Appointment Confirmed",
        text: `Your appointment with Dr.${req.body.doctor_name} has been booked Succesfully.`,
        html: `
      <div style="padding:10px;border-style:ridge">
      <h2 style="color:red">MED<span style="color:black">CARE</span></h2>
      <h3>Details</h3>
      <p>Your token booking request has been successfully confirmed.</p>
      <ul>
        <li>Appointment ID    : ${data._id}</li>
        <li>Patient ID    : ${req.body.user_id}</li>
        <li>Doctor    : ${req.body.doctor_name}</li>
        <li>Session : ${req.body.session}</li>
        <li>Time    : ${req.body.time}</li>
        <li>Date    :${req.body.date}</li>
        </ul>
      <p>Thank You</p>
    </div>`,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
      // mail end.
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/api/appointment", async (req, res) => {
  try {
    const appointments = await appointmentmodel.find({});
    res.send(appointments);
  } catch (error) {
    console.log(error);
  }
});

app.get("api/appointment/:id", async (req, res) => {
  try {
    const appointment = await appointmentmodel.findOne({ _id: req.params.id });
    res.send(appointment);
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/appointment/:id", async (req, res) => {
  try {
    await appointmentmodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});

app.delete("/api/appointment/:id", async (req, res) => {
  appointmentmodel
    .findByIdAndDelete({ _id: req.params.id })
    .then((data) => res.send(data))
    .catch((e) => console.log(e));
});

module.exports = app;
