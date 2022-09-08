const express = require("express");
const slotmodel = require("../models/Slot.js");
const app = express();

app.post("/api/slot", async (req, res) => {
  const slot = new slotmodel(req.body);
  try {
    await slot.save().then(() => res.json("details added"));
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/api/slot", async (req, res) => {
  try {
    let slots = await slotmodel.find({});
    res.send(slots);
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/slot/:id", async (req, res) => {
  try {
    let slot = await slotmodel.findOne({ _id: req.params.id });
    res.send(slot);
  } catch (error) {
    console.log(error);
  }
});

app.put("/api/slot/:id", async (req, res) => {
  try {
    console.log(req.body);
    await slotmodel
      .findByIdAndUpdate(req.params.id, req.body)
      .then((data) => res.send(data));
  } catch (error) {
    console.log(error);
  }
});


module.exports = app;