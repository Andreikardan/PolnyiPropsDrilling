const TopicService = require("../services/Topic.service");
const formatResponse = require("../utils/formatResponse");

class TopicsController {
  static async getTopicsWithQuestion(req, res) {
    try {
      const topics = await TopicService.get();
      if (!topics || topics.length === 0) {
        return res
          .status(400)
          .json(formatResponse(400, "No items in DB", null, "No items in DB"));
      }
      res.status(200).json(formatResponse(200, "Success", topics));
    } catch ({ message }) {
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, message));
      console.log(message);
    }
  }
}
module.exports = TopicsController;
