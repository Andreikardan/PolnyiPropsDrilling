'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate({Game}) {
      this.hasMany(Game,{ foreignKey:"user_id"})
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};