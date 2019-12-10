// const Sequelize = require('sequelize');
// const db = require('../server/db/index');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: DataTypes.STRING,
		password: DataTypes.STRING
	});
	return User;
};

// ========================= AUTHENTICATION ===================================
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");
// // Creating our User model
// module.exports = function(sequelize, DataTypes) {
// 	var User = sequelize.define("User", {
// 		// The email cannot be null, and must be a proper email before creation
// 		email: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			unique: true,
// 			validate: {
// 				isEmail: true
// 			}
// 		},
// 		// The password cannot be null
// 		password: {
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		}
// 	});
// 	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// 	User.prototype.validPassword = function(password) {
// 		return bcrypt.compareSync(password, this.password);
// 	};
// 	// Hooks are automatic methods that run during various phases of the User Model lifecycle
// 	// In this case, before a User is created, we will automatically hash their password
// 	User.addHook("beforeCreate", function(user) {
// 		user.password = bcrypt.hashSync(
// 			user.password,
// 			bcrypt.genSaltSync(10),
// 			null
// 		);
// 	return User;
// };

// var db = require('../models');

// const User = db.define('User', {
// 	// attributes
// 	username: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 	},
// 	password: {
// 		type: Sequelize.STRING,
// 		allowNull: false,
// 		// allowNull defaults to true
// 	},
// });

// User.create({
// 	username: 'Fakenameguy',
// 	password: 'password',
// }).then(function(dbUser) {
// 	console.log(dbUser);
// });

// User.findOne({ where: { id: 1 } }).then(function(dbUser) {
// 	console.log(dbUser);
// });

// var newGuy = {
// 	username: 'Newguy',
// 	password: 'password',
// };

// User.update(newGuy, {
// 	where: {
// 		id: 1,
// 	},
// }).then(function(dbUser) {
// 	console.log(dbUser);
// });

// User.destroy({
// 	where: {
// 		id: 1,
// 	},
// }).then(function(dbUser) {
// 	console.log(dbUser);
// });

// module.exports = User;

// ==============================================

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");
// // Creating our User model
// module.exports = function(sequelize, DataTypes) {
// 	var User = sequelize.define("User", {
// 		// The email cannot be null, and must be a proper email before creation
// 		email: {
// 			type: DataTypes.STRING,
// 			allowNull: false,
// 			unique: true,
// 			validate: {
// 				isEmail: true
// 			}
// 		},
// 		// The password cannot be null
// 		password: {
// 			type: DataTypes.STRING,
// 			allowNull: false
// 		}
// 	});
// 	// Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
// 	User.prototype.validPassword = function(password) {
// 		return bcrypt.compareSync(password, this.password);
// 	};
// 	// Hooks are automatic methods that run during various phases of the User Model lifecycle
// 	// In this case, before a User is created, we will automatically hash their password
// 	User.addHook("beforeCreate", function(user) {
// 		user.password = bcrypt.hashSync(
// 			user.password,
// 			bcrypt.genSaltSync(10),
// 			null
// 		);
// 	});
// 	return User;
// };
