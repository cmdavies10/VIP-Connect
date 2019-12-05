const Sequelize = require('sequelize');
const db = require('./index');

const Event = db.define(
	'event',
	{
		// attributes
		venue: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		artist: {
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		date: {
			type: Sequelize.DATEONLY,
			allowNull: false,
			// allowNull defaults to true
		},
		package: {
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		// googleId: {
		// 	type: Sequelize.STRING,
		// },
	},
	{
		// options
	}
);

module.exports = Event;
