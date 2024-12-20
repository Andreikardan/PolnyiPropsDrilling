const router = require("express").Router();
const GameQuestionController = require("../controllers/GameQuestion.controller");
// const verifyAccessToken = require("../middleware/verifyAccessToken");

router
 
  .get("/", GameQuestionController.getAllQuestionGame) 
  .post("/",  GameQuestionController.createGameQuestion)
 

module.exports = router;