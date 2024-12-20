const GameController = require("../controllers/Game.controller");
const router = require("express").Router();
const verifyAccessToken = require('../middleware/verifyAccessToken')

router

  .post("/", verifyAccessToken, GameController.create)
  .put('/', verifyAccessToken, GameController.update)

module.exports = router;