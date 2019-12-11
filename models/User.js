// const Sequelize = require('sequelize');
// const db = require('../server/db/index');

module.exports = function(sequelize, DataTypes) {
	var User = sequelize.define("User", {
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
			// validate: {
			// 	isEmail: true
			// }
		},
		// The password cannot be null
		password: {
			type: DataTypes.STRING,
			allowNull: false
		},
		googleID: DataTypes.STRING
	});
	return User;
};

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
