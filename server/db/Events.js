const Sequelize = require('sequelize');
const db = require('./index');

const Event = db.define(
	'events',
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
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		packages: {
			type: Sequelize.STRING,
			allowNull: false,
			// allowNull defaults to true
		},
		// googleId: {
		// 	type: Sequelize.STRING,
		// },
	}
	// {
	// 	// options
	// }
);

module.exports = Event;
