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
const sms = require("./routes/sms");

// use the modules
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
// use routers
app.use("/api/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/auth", authentication);
app.use("/api/registerUser", registerUserProfile);
app.use("/api/userPartnerPreference", userPartnerPreference);
app.use("/api/userImage", userImages);
app.use("/api/sms", sms);

// make server object that contain port property and the value for our server.
const server = {
  port: process.env.SERVER_PORT,
};

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
