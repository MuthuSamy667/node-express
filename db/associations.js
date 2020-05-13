function init(models) {
  const { Users } = models;

  // UserAddresses.hasMany(Users, { foreignKey: 'user_id', sourceKey: 'id' });
  // UserAddresses.belongsTo(Users, { foreignKey: 'user_id', sourceKey: 'id' });
}

module.exports = { init };
