const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");

// add all user-defined modules here
const appConfig = require("./config/app-config");

// create express instance
const app = express();
// enable cors
app.use(cors(appConfig.corsOptions));
// support json payload requests
app.use(bodyParser.json());
// support encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
// init server
const server = require("http").createServer(app);
// pick port from env or use user defined & normalize port number
const port = normalizePort(process.env.PORT || appConfig.port);

// set port to the app instance
app.set("port", port);

// routes for API
const router = express.Router(); // get an instance of express router
// All APIs will start with / then the endpoint name
app.use("/", router);

// test API
router.get("/test", (request, response) => {
  response.status(200).send("Test Success");
});

// REGISTER ALL THE ROUTERS HERE
// All the API's will be prefixed with /api
app.use("/", router);

app.use('/api/healthCheck', require('./routes/health-check.route'));



/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(portNumber) {
  var port = parseInt(portNumber, 10);

  if (isNaN(port)) {
    // named pipe
    return portNumber;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// listen to incomming requests
server.listen(port, function () {
  console.log("Server started on *: " + port);
});

// capture server start errors
server.on("error", function (error) {
  console.log("Error in start", error);
});
