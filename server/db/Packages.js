const Sequelize = require('sequelize');
const db = require('./index');

const Package = db.define(
	'package',
	{
		// attributes
		type: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		duration: {
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		date: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			// allowNull defaults to true
		},
		price: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		// packages: {
		// 	type: Sequelize.STRING,
		// 	allowNull: false,
		// 	// allowNull defaults to true
		// },
		// googleId: {
		// 	type: Sequelize.STRING,
		// },
	}
	// {
	// 	// options
	// }
);

module.exports = Package;
