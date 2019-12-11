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
		googleId: {
			type: DataTypes.STRING
		}
	});
	return User;
};
