const { dbConfig } = require('./config');

const env = process.env.NODE_ENV || 'dev';

module.exports = dbConfig[env];
