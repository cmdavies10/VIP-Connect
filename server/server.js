require("dotenv").config();

const morgan = require("morgan");
const bodyParser = require("body-parser");

var express = require("express");
var session = require("express-session");

var app = express();

// Requiring passport as we've configured it
var passport = require("./config/passport");

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
	session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);

// Initializegit Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get("/hello", function(req, res) {
	res.send({ express: "Hello World. Server is up b*tchez" });
});

module.exports = app;

// Starting the server, syncing our models ------------------------------------/

// // const express = require('express');
// // const app = express();
// // const port = process.env.PORT || 5000;

// // // console.log that your server is up and running
// // app.listen(port, () => console.log(`Listening on port ${port}`));

// // // create a GET route
// // app.get('/express_backend', (req, res) => {
// // 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// // });

// // app.get('/', function(req, res) {
// // 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// // });

// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // Routes
// // =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var apiRoutes = require('./routes/apiRoutes');
// app.use('/api', apiRoutes);

// var htmlRoutes = require('./routes/html/htmlRoute');
// app.use('/', htmlRoutes);

// var locationRoute = require('./routes/location');
// app.use('/api', locationRoute);

// var userRoute = require('./routes/user');
// app.use('/api', userRoute);

// var matchRoute = require('./routes/match');
// app.use('/api', matchRoute);

// var profileBuilder = require('./routes/profileBuilder');
// app.use('/api', profileBuilder);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
