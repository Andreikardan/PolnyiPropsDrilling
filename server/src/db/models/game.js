'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
 
    static associate({User, Question, GameQuestion }) {
      this.belongsTo(User, {foreignKey:"user_id"})
      this.belongsToMany( Question,{
        through:{
          model: GameQuestion
        },
        foreignKey: "game_id"
      })
    }
  }
  Game.init({
    user_id: DataTypes.INTEGER,
    result: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};