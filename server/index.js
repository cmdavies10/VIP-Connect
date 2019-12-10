const db = require("../models");
const app = require("./server");
const port = process.env.PORT || 3001;

db.sequelize
	.sync({
		force: true
	})
	// .then(console.log('database is synced'))

	.then(function() {
		app.listen(port);
		console.log(`server listening on ${port}`);
	});
