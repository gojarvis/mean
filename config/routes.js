var async = require('async');

module.exports = function(app, passport, auth) {        
    //Home route
    var index = require('../app/controllers/index');
    app.get('/', index.render);

};