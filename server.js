/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs'),
    passport = require('passport'),
    logger = require('mean-logger');
    Sequelize = require('sequelize');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

var app = express();

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV || 'development',
    config = require('./config/config')[env],
    auth = require('./config/middlewares/authorization');
    

//Bootstrap db connection
// var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
// 	  host: config.db.host,
// 	  dialect: config.db.dialect
// 	});

//Bootstrap models
var models_path = __dirname + '/app/models';
app.set('models', require(models_path));

//bootstrap passport config
require('./config/passport')(passport, config);


//express settings
require('./config/express')(app, config, passport);

//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || 3000;
app.listen(port);
console.log('Express app started on port ' + port);

//Initializing logger 
//logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;