var path = require('path'),
    rootPath = path.normalize(__dirname + '/..');

module.exports = {
    development: {
        db: 'mongodb://localhost/mean-dev',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Development'
        }
    },
    test: {
        db: 'mongodb://localhost/mean-test',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Test'
        }
    },
    production: {
        db: 'mongodb://localhost/mean',
        root: rootPath,
        app: {
            name: 'MEAN - A Modern Stack - Production'
        }
    }
};