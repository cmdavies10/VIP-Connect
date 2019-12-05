var express = require('express');
var router = express.Router();
// var path = require("path");
var db = require('./../models/index.js');

router.get('/users', (req, res) => {
	db.User.findAll({}).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

// router.get("/user/:id", (req, res) => {
//   db.users.findAll({
//     where:{
//       id: req.params.id
//     }
//   })
//   .then(function(dbUsers){
//       res.json(dbUsers);
//   });
// });

router.post('/users', (req, res) => {
	db.User.create({
		name: req.body.name,
		password: req.body.password,
	}).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

// router.post("/api/user", (req, res) => {
//   db.User.read({

//   }).then(function(dbUser){
//         res.json(dbUser);
//     });

//     res.send(`a post request with /user/post route on port ${PORT}`);
// })

router.put('/users/:id', (req, res) => {
	db.Users.update(
		{
			username: req.body.username,
			password: req.body.password,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

router.delete('/users/:id', (req, res) => {
	db.Users.destroy(
		{
			username: req.body.username,
			password: req.body.password,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

module.exports = router;
