const QuestionService = require("../services/Question.service");
const formatResponse = require("../utils/formatResponse");

class QuestionController {
  static async getQuestionById(req, res) {
    const { id } = req.params;

    try {
      const question = await QuestionService.getById(+id);
      res.status(200).json(formatResponse(200, "success", question));
    } catch ({ message }) {
      console.error(message);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
    }
  }
}

module.exports = QuestionController;
