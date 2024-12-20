'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
  
    static associate({Topic, Game, GameQuestion}) {
      this.belongsTo(Topic, {foreignKey:"topic_id"})
      this.belongsToMany(Game, {
        through:{
          model: GameQuestion
        },
        foreignKey: "question_id",
       
      })
     
    }
  }
  Question.init({
    topic_id: DataTypes.INTEGER,
    question: DataTypes.STRING,
    answer: DataTypes.STRING,
    points: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};