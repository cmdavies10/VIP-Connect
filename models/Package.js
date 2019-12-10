// const Sequelize = require('sequelize');
// const db = require('../server/db/index');

module.exports = function(sequelize, DataTypes) {
	var Package = sequelize.define('Package', {
		type: DataTypes.STRING,
		duration: DataTypes.STRING,
		date: DataTypes.STRING,
		price: DataTypes.STRING,
	});
	return Package;
};

// const Package = db.define(
// 	'package',
// 	{
// 		// attributes
// 		type: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 		},
// 		duration: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 			// allowNull defaults to true
// 		},
// 		date: {
// 			type: Sequelize.DATEONLY,
// 			allowNull: false,
// 			// allowNull defaults to true
// 		},
// 		price: {
// 			type: Sequelize.STRING,
// 			allowNull: false,
// 		},
// 		// packages: {
// 		// 	type: Sequelize.STRING,
// 		// 	allowNull: false,
// 		// 	// allowNull defaults to true
// 		// },
// 		// googleId: {
// 		// 	type: Sequelize.STRING,
// 		// },
// 	}
// 	// {
// 	// 	// options
// 	// }
// );

// module.exports = Package;
