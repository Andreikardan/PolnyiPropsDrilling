
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

        static async getLastGame(req, res) {
            try {
              const maxGame = await GameQuestionService.getMaxGameId();
              if (!maxGame) {
                return res.status(404).json({ message: 'Игры не найдены' });
              }
              return res.status(200).json(maxGame);
            } catch (error) {
              console.error(error);
              return res.status(500).json({ message: 'Ошибка при получении последней игры' });
            }
          }
}

module.exports = GameQuestion