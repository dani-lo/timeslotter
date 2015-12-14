/**
 * Module dependencies
 */
var express = require("express"),
    session = require("express-session"),
    bodyParser = require("body-parser"),
    errorhandler = require("errorhandler"),
    api = require("./api"),
    http = require("http"),
    path = require("path"),
    hello = require('./hello');


var app = module.exports = express();
/**
 * Configuration
 */

// all environments
app.set("port", process.env.PORT || 8080);
app.use(express.static("dist"));
app.use(express.static("vendor"));
app.use(express.static("templates"));
app.use(express.static("test"));
app.use(express.static("scripts"));
//app.use(express.static("node_modules"));

var env = process.env.NODE_ENV || "development";

// development only
if (env === "development") {
  app.use(errorhandler());
}

// production only
if (env === "production") {
  // TODO
  console.log("production")
}
/**
 * Routes
 */

app.get("/", function (req, res, next) {
    "use strict";
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tests", function (req, res, next) {
    "use strict";
    res.sendFile(path.join(__dirname,"SpecRunner.html"));
});
// JSON API
app.get("/api/slots", api.slots);

/**
 * Run Server
 */

http.createServer(app).listen(app.get("port"), function () {
  "use strict";
  hello();
});
