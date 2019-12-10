require("dotenv").config();

const morgan = require("morgan");
const bodyParser = require("body-parser");

const db = require("../models");

var express = require("express");
var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback wiksth a user object.
passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "http://www.example.com/auth/google/callback"
		},
		function(accessToken, refreshToken, profile, done) {
			db.User.findOrCreate({ googleId: profile.id }, function(err, user) {
				return done(err, user);
			});
		}
	)
);

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

var app = express();

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	require("express-session")({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true
	})
);

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));
require("../routes/api-routes.js")(app);

// app.use("/", require("../routes/apiRoutes.js"));
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get(
	"/auth/google",
	passport.authenticate("google", {
		scope: ["https://www.googleapis.com/auth/plus.login"]
	})
);

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/loginpage" }),
	function(req, res) {
		res.redirect("/optionspage");
	}
);

app.get("/hello", function(req, res) {
	res.send({ express: "Hello World. Server is up b*tchez" });
});

app.use("/users", require("../routes/userRoutes"));

app.use("/packages", require("../routes/packageRouter"));

app.use("/events", require("../routes/eventRouter"));

app.use("/artists", require("../routes/artistRoutes"));

// app.use('/users', require('../routes/userRoutes'));

// app.use('/users', require('../routes/userRoutes'));

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
