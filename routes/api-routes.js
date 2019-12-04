// Requiring our models
// ===============================================================

// someDB to be changed
var someDB = require("../models");

// Routes
// =============================================================

module.exports = function(app) {
	// GET route for getting all
	app.get("/", function(req, res) {
		// db
		// 	."TABLE NAME"
		// 	.findAll({}).then(function () {
		// 	res.json();
		// });
	});

	// POST route
	app.post("/", function(req, res) {
		// db.
		// 	."TABLE NAME"
		// 	.create({
		// 	text: req.body.text,
		// 	complete: req.body.complete
		// }).then(function() {
		// 	res.json();
		// });
	});

	// DELETE route
	app.delete("/", function(req, res) {
		// db
		// ."TABLE NAME"
		// .destroy({
		// 		where:
		// 		{
		// 			id: req.params.id
		// 		}
		// 	})
		// 	.then(function () {
		// 	// res.end();
		// 		res.json();
		// 	});
	});

	// PUT route for updating
	app.put("/", function(req, res) {
		// 	db
		// 		."TABLE NAME"
		// 		.update(
		// 		{
		// 			text: req.body.text,
		// 			complete: req.body.complete
		// 		},
		// 		{
		// 			where: {
		// 				id: req.body.id
		// 			}
		// 		}
		// 	).then(function() {
		// 		// res.end();
		// 		res.json();
		// 	});
	});
};
