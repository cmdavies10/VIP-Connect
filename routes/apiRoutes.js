var express = require("express");
var router = express.Router();
// var db = require("../models");
// var path = require("path");

router.get("/api", (req, res) => {
	console.log("This is the main api");
});

router.get("/api/users", (req, res) => {
	console.log("This is list for users");
});

router.get("/api/events", (req, res) => {
	console.log("This is the events list");
});

router.get("/api/artists", (req, res) => {
	console.log("This is the artist list");
});

router.get("/api/packages", (req, res) => {
	console.log("This is the package list");
});

module.exports = router;
