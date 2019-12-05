const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const db = new Sequelize('vip', 'root', 'Jpisme13.', {
	host: 'localhost',
	dialect: 'mysql',
});

// Option 2: Passing a connection URI
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

module.exports = db;
