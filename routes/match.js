var express = require('express');
var router = express.Router();
var db = require('./../models/index.js');

router.get('/artists', (req, res) => {
	db.Artist.findAll({}).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.post('/artists', (req, res) => {
	db.Artist.create({
		name: req.body.name,
		password: req.body.password,
	}).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.put('/artists/:id', (req, res) => {
	db.Artist.update(
		{
			name: req.body.name,
			password: req.body.password,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.delete('/artists/:id', (req, res) => {
	db.Artist.destroy(
		{
			name: req.body.name,
			password: req.body.password,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

module.exports = router;
