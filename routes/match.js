var express = require('express');
var router = express.Router();
var db = require('../models/index.js');
var Artist = require('../models/Artists');

router.get('/artists', (req, res) => {
	Artist.findAll({}).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.post('/artists', (req, res) => {
	Artist.create({
		name: req.body.name,
		password: req.body.password,
	}).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.put('/artists/:id', (req, res) => {
	Artist.update(
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
	Artist.destroy(
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
