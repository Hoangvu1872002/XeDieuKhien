var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var carssRouter = require("./routes/cars");
const accountRouter = require("./routes/accounts");
const parameterRouter = require("./routes/parameters");

const { errorsMiddleware } = require("./middlewares/errorsMiddleware");
const dbConnect = require("./config/database");

dbConnect();
// fn()

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/cars", carssRouter);
app.use("/accounts", accountRouter);
app.use("/parameters", parameterRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(errorsMiddleware);

const port = 5003;
const http = require("http");

const server = http.createServer(app);
server.listen(port, () => console.log(`Server running on port ${port}`));

const { MongoClient } = require("mongodb");
// const { Server } = require("socket.io");
// const socketIO = require("socket.io");

const io = require("socket.io")(server, {
  cors: {
    // origin: "http://localhost:3000",
    origin: "*",
    // methods: ["GET"],
  },
});
let changeStream;
const fun = async () => {
  // const io = new Server(server);
  const client = new MongoClient(
    "mongodb+srv://bugnef:o4GXlwddlEd1BfoA@cluster0.zxh5q5d.mongodb.net/?retryWrites=true&w=majority"
  );

  await client.connect();
  const collection = client.db("test").collection("parameters");
  changeStream = collection.watch();
};

fun();

// const socketIO = require("socket.io");
// // const driverModel = require("./models/driverModel");
// const io = socketIO(server, {
//   cors: {
//     origin: "*",
//   },
// });

const socketCtl = require("./controller/socketCtl");

socketCtl(io, changeStream);

module.exports = app;
