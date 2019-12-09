// const Sequelize = require('sequelize');
// const db = require('../server/db/index');

module.exports = function(sequelize, DataTypes) {
	var Event = sequelize.define('Event', {
		venue: DataTypes.STRING,
		artist: DataTypes.STRING,
		date: DataTypes.STRING,
		packages: DataTypes.STRING,
	});
	return Event;
};

// const Event = db.define(
// 	'event',
// 	{
// 		// attributes
// 		venue: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 		},
// 		artist: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 			// allowNull defaults to true
// 		},
// 		date: {
// 			type: Sequelize.DATEONLY,
// 			allowNull: false,
// 			// allowNull defaults to true
// 		},
// 		// packages: {
// 		// 	type: Sequelize.STRING,
// 		// 	allowNull: false,
// 		// 	// allowNull defaults to true
// 		// },
// 		// googleId: {
// 		// 	type: Sequelize.STRING,
// 		// },
// 	},
// 	{
// 		// options
// 	}
// );

// module.exports = Event;
