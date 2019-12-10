// const Sequelize = require('sequelize');
// const db = require('../server/db/index');

module.exports = function(sequelize, DataTypes) {
	var Artist = sequelize.define('Artist', {
		name: DataTypes.STRING,
		password: DataTypes.STRING,
	});
	return Artist;
};

// const Artist = db.define(
// 	'artist',
// 	{
// 		// attributes
// 		name: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 		},
// 		password: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 			// allowNull defaults to true
// 		},
// 		// googleId: {
// 		// 	type: Sequelize.STRING,
// 		// },
// 	},
// 	{
// 		// options
// 	}
// );

// module.exports = Artist;
