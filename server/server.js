require("dotenv").config();

const morgan = require("morgan");
const bodyParser = require("body-parser");

var express = require("express");

var app = express();

// google auth
var GoogleStrategy = require("passport-google-oauth20").Strategy;

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/hello", function(req, res) {
	res.send({ express: "Hello World. Server is up b*tchez" });
});

// middleware google auth routes
app.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile"] })
);

app.get(
	"/auth/google/callback",
	passport.authenticate("google", { failureRedirect: "/" }),
	function(req, res) {
		// Successful authentication, redirect home.
		res.redirect("/");
	}
);

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env["GOOGLE_CLIENT_ID"],
			clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
			callbackURL: "/"
		},
		function(accessToken, refreshToken, profile, cb) {
			User.findOrCreate({ googleId: profile.id }, function(err, user) {
				return cb(err, user);
			});
		}
	)
);

// Configure Passport authenticated session persistence.
// ======================================================================
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

// DEFINE ROUTES WITH PASSPORT.AUTHENTICATE BELOW

// END PASSPORT ROUTES

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
