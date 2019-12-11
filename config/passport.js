require("dotenv").config();
var passport = require("passport"),
	LocalStrategy = require("passport-local").Strategy;

// var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
	new LocalStrategy(function(username, password, done) {
		// When a user tries to sign in this code runs
		db.User.findOne({
			where: {
				username: username
			}
		}).then(function(dbUser) {
			// If there's no user with the given username
			if (!dbUser) {
				return done(null, false, {
					message: "Incorrect username."
				});
			}
			// If there is a user with the given username, but the password the user gives us is incorrect
			else if (dbUser.password !== password) {
				return done(null, false, {
					message: "Incorrect password."
				});
			}
			// If none of the above, return the user
			return done(null, dbUser);
		});
	})
);

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "https://vip-fan.herokuapp.com/optionspage"
		},
		function(accessToken, refreshToken, profile, done) {
			db.User.findOrCreate({
				where: {
					googleId: profile.id
				}
			}).then(function(err, user) {
				return done(err, user);
			});
		}
	)
);

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
passport.serializeUser(function(user, cb) {
	cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
