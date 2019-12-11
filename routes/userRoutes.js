var express = require("express");
var router = express.Router();
// var path = require("path");
var db = require("../models");
// var User = require('../models/User');

// mounted on /users

router.get("/", (req, res) => {
	console.log(db.User);
	db.User.findAll({}).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

router.post("/", (req, res) => {
	db.User.create({
		username: req.body.username,
		password: req.body.password
	}).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

router.put("/:id", (req, res) => {
	db.User.update(
		{
			username: req.body.username,
			password: req.body.password
		},
		{
			where: {
				id: req.params.id
			}
		}
	).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

router.delete("/:id", (req, res) => {
	db.User.destroy(
		{
			username: req.body.username,
			password: req.body.password
		},
		{
			where: {
				id: req.params.id
			}
		}
	).then(function(dbUsers) {
		res.json(dbUsers);
	});
});

module.exports = router;
