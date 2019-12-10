const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
// var db = require('./models');

var express = require('express');

var app = express();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/static', express.static(path.join(__dirname, '../build')));

app.get('/hello', function(req, res) {
	res.send({ express: 'Hello World. Server is up b*tchez' });
});

app.use('/users', require('../routes/userRoutes'));

app.use('/packages', require('../routes/packageRouter'));

app.use('/events', require('../routes/eventRouter'));

app.use('/artists', require('../routes/artistRoutes'));

// app.use('/users', require('../routes/userRoutes'));

// app.use('/users', require('../routes/userRoutes'));

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build'), 'index.html');
	res.end();
});

module.exports = app;

// Starting the server, syncing our models ------------------------------------/

// // const express = require('express');
// // const app = express();
// // const port = process.env.PORT || 5000;

// // // console.log that your server is up and running
// // app.listen(port, () => console.log(`Listening on port ${port}`));

// // // create a GET route
// // app.get('/express_backend', (req, res) => {
// // 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// // });

// // app.get('/', function(req, res) {
// // 	res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// // });

// var express = require("express");

// // Sets up the Express App
// // =============================================================
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Requiring our models for syncing
// var db = require("./models");

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Static directory
// app.use(express.static("public"));

// // Routes
// // =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/author-api-routes.js")(app);
// require("./routes/post-api-routes.js")(app);

// // Syncing our sequelize models and then starting our Express app
// // =============================================================
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });

// Routes
// require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// var apiRoutes = require('./routes/apiRoutes');
// app.use('/api', apiRoutes);

// var htmlRoutes = require('./routes/html/htmlRoute');
// app.use('/', htmlRoutes);

// var locationRoute = require('./routes/location');
// app.use('/api', locationRoute);

// var userRoute = require('./routes/user');
// app.use('/api', userRoute);

// var matchRoute = require('./routes/match');
// app.use('/api', matchRoute);

// var profileBuilder = require('./routes/profileBuilder');
// app.use('/api', profileBuilder);

// var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
