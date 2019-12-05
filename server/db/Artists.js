const Sequelize = require('sequelize');
const db = require('./index');

const Artist = db.define(
	'artist',
	{
		// attributes
		artistName: {
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

module.exports = Artist;
