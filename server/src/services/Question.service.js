const { Question } = require("../db/models");


class QuestionService {
    static async getById(id) {
        return await Question.findOne(id);
      }
    
}

module.exports = QuestionService
