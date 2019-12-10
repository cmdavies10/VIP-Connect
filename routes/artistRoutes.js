var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('../models');
// var User = require('../models/User');

//mounted on /users

router.get('/', (req, res) => {
	console.log(db.Artist);
	db.Artist.findAll({}).then(function(dbArtists) {
		res.json(dbArtists);
	});
});

router.post('/', (req, res) => {
	db.Artist.create({
		name: req.body.name,
		password: req.body.password,
	}).then(function(dbArtists) {
		res.json(dbArtists);
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

router.delete('/:id', (req, res) => {
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
