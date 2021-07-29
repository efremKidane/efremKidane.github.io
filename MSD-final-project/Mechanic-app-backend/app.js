const express = require("express");
const path = require("path");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const logger = require("morgan");


const MongoClient = require("mongodb").MongoClient;
const client = new MongoClient(
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3h5qi.mongodb.net?retryWrites=true&w=majority",
  { useUnifiedTopology: true }
);
let connection;

const usersRouter = require("./routes/users");
const appointmentInfoRouter = require('./routes/appintment');
const sendEmailRouter = require('./routes/sendEmail')
const employeeRouter = require('./routes/employee')

const app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  if (!connection) {
    // connect to database
    console.log("connecting");
    client.connect(function (err) {
      connection = client.db("Auto-Mechanics");
      req.db = connection;
      next();
    });
  } else {
    //
    req.db = connection;
    next();
  }
});

app.use("/users", usersRouter);
app.use('/appointment', appointmentInfoRouter)
app.use('/sendEmail', sendEmailRouter);
app.use('/', employeeRouter)

module.exports = app;

app.listen(5000);
