/* jshint indent: 1 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        field: 'id',
      },
      firstName: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'first_name',
      },
      lastName: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'last_name',
      },
      mobile: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'mobile',
      },
      landLine: {
        type: DataTypes.STRING(10),
        allowNull: true,
        field: 'land_line',
      },
      email: {
        type: DataTypes.STRING(30),
        allowNull: true,
        field: 'email',
      },
      userName: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'user_name',
      },
      password: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'password',
      },
      gender: {
        type: DataTypes.STRING(3),
        allowNull: false,
        field: 'gender',
      },
      role: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'role',
      },
      mode: {
        type: DataTypes.STRING(15),
        allowNull: false,
        field: 'mode',
      },
      dob: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        field: 'dob',
      },
      type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'type',
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: '0',
        field: 'status',
      },
      createdBy: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'created_by',
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'created_at',
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        field: 'updated_at',
      },
    },
    {
      tableName: 'users',
      timestamp: false,
    },
  );
};
