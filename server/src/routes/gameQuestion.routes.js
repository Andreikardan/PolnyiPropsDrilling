const router = require("express").Router();
const GameQuestionController = require("../controllers/GameQuestion.controller");
// const verifyAccessToken = require("../middleware/verifyAccessToken");

router
 
  
  .post("/",  GameQuestionController.createGameQuestion)
 

module.exports = router;