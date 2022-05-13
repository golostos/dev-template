// @ts-check
const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db");
const { UsersModel } = require('./user.model');

class SessionsModel extends Model { }

SessionsModel.init({
  sid: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'sessions',
  indexes: [{unique: true, fields: ['sid']}]
})

SessionsModel.belongsTo(UsersModel, {
  foreignKey: {
    name: 'userId'
  }
})
UsersModel.hasMany(SessionsModel, {
  foreignKey: {
    name: 'userId'
  }
})

module.exports = { SessionsModel, sequelize }