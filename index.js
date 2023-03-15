const express = require("express"),
  app = express(),
  cors = require("cors"),
  path = require("path"),
  bodyParser = require("body-parser");
require("dotenv").config();

// routers import
const authentication = require("./routes/authentication");
const userAbout = require("./routes/userAbout");
const userFamilyAbout = require("./routes/userFamilyAbout");
const userLifestyle = require("./routes/userLifestyle");
const registerUserProfile = require("./routes/registerUserProfile");
const userPartnerProfile = require("./routes/userPartnerProfile");

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
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/auth", authentication);
app.use("/userAbout", userAbout);
app.use("/userFamilyAbout", userFamilyAbout);
app.use("/userLifestyle", userLifestyle);
app.use("/registerUser", registerUserProfile);
app.use("/userPartnerProfile", userPartnerProfile);

// make server object that contain port property and the value for our server.
const server = {
  port: process.env.SERVER_PORT,
};

// starting the server
app.listen(server.port, () =>
  console.log(`Server started, listening port: ${server.port}`)
);
