var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('./../models/index.js');

router.get('/eventCreator', (req, res) => {
	db.eventCreator.findAll({}).then(function(dbEvents) {
		res.json(dbEvents);
	});
});

router.get('/eventCreator/:id', (req, res) => {
	db.eventCreator
		.findOne({
			where: { id: req.params.id },
		})

		.then(function(dbEvents) {
			res.json(dbEvents);
		});
});

router.post('/eventCreator', (req, res) => {
	db.eventCreator
		.create({
			venue: req.body.venue,
			artist: req.body.artist,
			date: req.body.date,
			packages: req.body.packages,
		})
		.then(function(dbEvents) {
			res.json(dbEvents);
		});
});

router.put('/events/edit', (req, res) => {
	db.eventCreator
		.update(
			{
				venue: req.body.venue,
				artist: req.body.artist,
				date: req.body.date,
				packages: req.body.packages,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		)
		.then(function(dbEvents) {
			res.json(dbEvents);
		});
});

router.delete('/events/:id', (req, res) => {
	db.eventCreator
		.destroy(
			{
				venue: req.body.venue,
				artist: req.body.artist,
				date: req.body.date,
				packages: req.body.packages,
			},
			{
				where: {
					id: req.params.id,
				},
			}
		)
		.then(function(dbEvents) {
			res.json(dbEvents);
		});
});

module.exports = router;
