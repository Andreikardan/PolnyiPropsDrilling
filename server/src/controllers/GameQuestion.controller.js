
const GameQuestionService = require ('../services/GameQuestion.service');
const formatResponse = require("../utils/formatResponse");

class GameQuestion {
    static async createGameQuestion(req,res) {
        try {
      
            const {question_id, game_id } = req.body

      
            const GameQuestion = await GameQuestionService.createGameQuestion(game_id, question_id); 
            return res.status(201).json(formatResponse(201, "success", GameQuestion));
          } catch ({ message }) {
            console.error(message);
            res
              .status(500)
              .json(formatResponse(500, "Internal server error", null, message));
          }
        }

      
        //   static async getAllQuestionGame(req, res) {
        //     try {
        //     const {game_id} = req.body
        //       const favorites = await GameQuestionService.getMaxGameId(game_id);
        //       return res.status(200).json(formatResponse(200, "success", favorites));
        //     } catch ({ message }) {
        //       console.error(message);
        //       res
        //         .status(500)
        //         .json(formatResponse(500, "Internal server error", null, message));
        //     }
        //   }
        
}

module.exports = GameQuestion