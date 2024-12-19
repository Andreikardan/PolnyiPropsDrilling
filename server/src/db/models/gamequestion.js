'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GameQuestion extends Model {
    
    static associate(models) {
  
    }
  }
  GameQuestion.init({
    game_id: DataTypes.INTEGER,
    question_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameQuestion',
  });
  return GameQuestion;
};