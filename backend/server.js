const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 5000;

// mongodb connection
const mongoose = require('mongoose');
const DB_CLUSTER = "medcare";
const DB_USERNAME = "admin_medcare";
const DB_PASSWORD = "Medcare_12283242";
const DB_NAME = "medcare";

mongoose.connect(
  `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@${DB_CLUSTER}.opkgadq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});


const route = './routes/';

const user = require(`${route}User`);
app.use(user);

const doctor = require(`${route}Doctor`);
app.use(doctor);

const appointment = require(`${route}Appointment`);
app.use(appointment);


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});