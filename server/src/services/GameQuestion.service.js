const { where } = require("sequelize");
const { GameQuestion,Question } = require("../db/models");
class GameQuestionService {
 
  static async createGameQuestion(game_id, question_id ) { 
    
    const newGameQuestion = await GameQuestion.create({ game_id, question_id });

    return newGameQuestion;
  }


  static async getMaxGameId(game_id) {


    const maxGame = await GameQuestion.findOne({
        order: [['game_id', 'DESC']],
        where:{game_id},
        attributes: ['game_id']
      });    
      
    


    const questions = await GameQuestion.findAll({where:{game_id: maxGame.game_id} })

      return questions
}


  

}

module.exports = GameQuestionService; 
