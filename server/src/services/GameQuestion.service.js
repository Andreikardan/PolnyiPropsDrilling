const { GameQuestion } = require("../db/models");

class GameQuestionService {
 
  static async createGameQuestion(game_id, question_id ) { 
    
    const newGameQuestion = await GameQuestion.create({ game_id, question_id });

    return newGameQuestion;
  }


  static async getMaxGameId() {
    const maxGame = await GameQuestion.findOne({order: [['id', 'DESC']]});
    return maxGame;
}

  

}

module.exports = GameQuestionService; 
