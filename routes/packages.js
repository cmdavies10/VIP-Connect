var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('./../models/index.js');

router.get('/packages', (req, res) => {
	db.Package.findAll({}).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

router.get('/packages/:id', (req, res) => {
	db.Package.findOne({
		where: { id: req.params.id },
	}).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

router.post('/packages', (req, res) => {
	db.Package.create({
		venue: req.body.venue,
		artist: req.body.artist,
		date: req.body.date,
		packageInfo: req.body.packageinfo,
	}).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

router.put('/packages/edit', (req, res) => {
	db.Package.update(
		{
			venue: req.body.venue,
			artist: req.body.artist,
			date: req.body.date,
			packageinfo: req.body.packageinfo,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

router.delete('/packages/:id', (req, res) => {
	db.Package.destroy(
		{
			venue: req.body.venue,
			artist: req.body.artist,
			date: req.body.date,
			packageinfo: req.body.packageinfo,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

module.exports = router;
