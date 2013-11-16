var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development',
    config = require('../../config/config')[env],
    auth = require('../../config/middlewares/authorization');
    

//Bootstrap db connection
var sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, {
    host: config.db.host,
    dialect: config.db.dialect
  });


// load models
var models = [
  // 'Article',
  'User'
];

models.forEach(function(model) {
  console.log(model);
  module.exports[model] = sequelize.import(__dirname + '/' + model);
});

// describe relationships
// (function(m) {
//   m.PhoneNumber.belongsTo(m.User);
//   m.Task.belongsTo(m.User);
//   m.User.hasMany(m.Task);
//   m.User.hasMany(m.PhoneNumber);
// })(module.exports);

// export connection
module.exports.sequelize = sequelize;