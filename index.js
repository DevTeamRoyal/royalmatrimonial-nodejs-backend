const express = require("express"),
  app = express(),
  cors = require("cors"),
  path = require("path"),
  bodyParser = require("body-parser");
require("dotenv").config();

// routers import
const authentication = require("./routes/authentication");
const registerUserProfile = require("./routes/registerUserProfile");
const userPartnerPreference = require("./routes/userPartnerPreference");
const userImages = require("./routes/galleryImages");

// use the modules
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
    parameterLimit: 50000,
  })
);
// use routers
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authentication);
app.use("/api/registerUser", registerUserProfile);
app.use("/api/userPartnerPreference", userPartnerPreference);
app.use("/api/userImage", userImages);

// make server object that contain port property and the value for our server.
const server = {
  port: process.env.SERVER_PORT,
};

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
