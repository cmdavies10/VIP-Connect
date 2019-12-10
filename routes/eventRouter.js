var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('../models');
// var User = require('../models/User');

//mounted on /users

router.get('/', (req, res) => {
	console.log(db.Event);
	db.Event.findAll({}).then(function(dbEvents) {
		res.json(dbEvents);
	});
});

router.post('/', (req, res) => {
	db.Event.create({
		venue: req.body.venue,
		artist: req.body.artist,
		date: req.body.date,
		packages: req.body.packages,
	}).then(function(dbEvents) {
		res.json(dbEvents);
	});
});

// router.post("/api/user", (req, res) => {
//   db.User.read({

//   }).then(function(dbUser){
//         res.json(dbUser);
//     });

//     res.send(`a post request with /user/post route on port ${PORT}`);
// })

router.put('/:id', (req, res) => {
	db.Event.update(
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
	).then(function(dbEvents) {
		res.json(dbEvents);
	});
});

router.delete('/:id', (req, res) => {
	db.Event.destroy(
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
	).then(function(dbEvents) {
		res.json(dbEvents);
	});
});

module.exports = router;
