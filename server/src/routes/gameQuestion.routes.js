const router = require("express").Router();
const GameQuestionController = require("../controllers/GameQuestion.controller");
const verifyAccessToken = require("../middleware/verifyAccessToken");

router
 
  .get("/ ", verifyAccessToken, GameQuestionController.getLastGame) 
  .post("/", verifyAccessToken, GameQuestionController.createGameQuestion)
 

module.exports = router;