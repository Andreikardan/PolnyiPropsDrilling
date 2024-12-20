const GameController = require("../controllers/Game.controller");
const router = require("express").Router();
const verifyAccessToken = require('../middleware/verifyAccessToken')

router
.get("/:id", GameController.getMaxGame)
  .post("/", verifyAccessToken, GameController.create)
  .put('/', verifyAccessToken, GameController.update)

module.exports = router;