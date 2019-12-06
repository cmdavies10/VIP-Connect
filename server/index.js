const db = require('./db');
const app = require('./server');
const port = process.env.PORT || 3001;

db.sync({ force: true })
	.then(console.log('database is synced'))

	.then(function() {
		app.listen(port);
		console.log(`server listening on ${port}`);
	});
