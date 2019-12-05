const Sequelize = require('sequelize');
const db = require('./index');

const User = db.define(
	'user',
	{
		// attributes
		userName: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		googleId: {
			type: Sequelize.STRING,
		},
	},
	{
		// options
	}
);

module.exports = User;
