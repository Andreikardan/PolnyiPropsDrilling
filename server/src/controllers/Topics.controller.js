class TopicsController {
  static async getTopicsWithQuestion(req,res){
    try {
      const topics = await Top
      
    } catch ({message}) {
      res
      .status(500)
      .json(formatResponse(500, "Internal server error", null, message));
    console.log(message);
    }
  }
}
module.exports = TopicsController