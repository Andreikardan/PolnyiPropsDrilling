const QuestionController = require("../controllers/Question.controller");
const router = require("express").Router();

router

  .get("/:id", QuestionController.getQuestionById)

module.exports = router;