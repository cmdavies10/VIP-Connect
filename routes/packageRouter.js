var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('../models');
// var User = require('../models/User');

//mounted on /users

router.get('/', (req, res) => {
	console.log(db.Package);
	db.Package.findAll({}).then(function(dbPackages) {
		res.json(dbPackages);
	});
});

router.post('/', (req, res) => {
	db.Package.create({
		type: req.body.type,
		duration: req.body.duration,
		date: req.body.date,
		price: req.body.price,
	}).then(function(dbPackages) {
		res.json(dbPackages);
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
	db.Package.update(
		{
			type: req.body.type,
			duration: req.body.duration,
			date: req.body.date,
			price: req.body.price,
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

router.delete('/:id', (req, res) => {
	db.Package.destroy(
		{
			type: req.body.type,
			duration: req.body.duration,
			date: req.body.date,
			price: req.body.price,
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
