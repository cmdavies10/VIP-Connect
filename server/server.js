const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
// var db = require('./models');
var session = require("express-session");

// Requiring passport as we've configured it
var passport = require("../config/passport");

var express = require("express");

var app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "../client/build")));

// sessions to keep track of our user's login status
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("../routes/html-routes")(app);
require("../routes/api-routes")(app);

app.use("/users", require("../routes/userRoutes"));

// app.use("/packages", require("../routes/packageRouter"));

// app.use("/events", require("../routes/eventRouter"));

// app.use("/artists", require("../routes/artistRoutes"));

// app.use('/users', require('../routes/userRoutes'));

// app.use('/users', require('../routes/userRoutes'));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../client/build"), "index.html");
	res.end();
});

module.exports = app;
