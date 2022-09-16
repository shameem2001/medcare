const mongoose = require("mongoose");

const slotSchema = mongoose.Schema({
  doctor_id: {
    type: String,
  },
  date: {
    type: String,
  },
  isLeave: {
    type: String,
  },
  slots: {
    type: Array,
  },
});

const slot = mongoose.model("slot", slotSchema);
module.exports = slot;
