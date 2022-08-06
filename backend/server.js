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


const userRoute = './routes/user/';
const doctorRoute = './routes/doctor/';
const adminRoute = './routes/admin/';

const userAddUser = require(`${userRoute}AddUser`);
app.use(userAddUser);

const userDetails = require(`${userRoute}UserDetails`);
app.use(userDetails);

const doctorDetails = require(`${doctorRoute}DoctorDetails`);
app.use(doctorDetails);

const adminAddDoctor = require(`${adminRoute}AddDoctor`);
app.use(adminAddDoctor);




app.listen(process.env.PORT || PORT, () => {
    console.log(`Server Started at port ${PORT}`);
});