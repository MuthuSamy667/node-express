const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const { dbConfig } = require('../config');
const associations = require('./associations');

const env = process.env.NODE_ENV || 'dev';
const { Op } = Sequelize;

const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $like: Op.like,
  $iLike: Op.iLike,
  $and: Op.and,
  $or: Op.or,
};

const options = { ...dbConfig[env] };
options.operatorsAliases = operatorsAliases;
// options.logging = true;
options.isolationLevel = Sequelize.Transaction.ISOLATION_LEVELS.REPEATABLE_READ;

const modelsPath = path.join(__dirname, '..', 'models');
const sequelize = new Sequelize(options);

fs.readdirSync(modelsPath)
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    sequelize.import(path.join(__dirname, '..', 'models', file));
  });

const models = Object.keys(sequelize.models).reduce((uppercaseModels, name) => {
  const ModelName = name.substring(0, 1).toUpperCase() + name.substring(1);
  uppercaseModels[ModelName] = sequelize.models[name];
  return uppercaseModels;
}, {});

associations.init(models);
module.exports = models;
module.exports.sequelize = sequelize;
global.Promise = Sequelize.Promise;
