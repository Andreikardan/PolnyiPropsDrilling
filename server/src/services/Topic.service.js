const {Question} = require('../db/models')
const {Topic} = require('../db/models')

class TopicService {
  static async get () {
    return await Topic.findAll({include:{model:Question}})
  }
}
module.exports = TopicService