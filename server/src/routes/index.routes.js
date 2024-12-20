const router = require("express").Router();
const userRouter = require("./auth.routes");
const gameRoutes = require('./game.routes')
const topicsRoutes =require('./topics.routes')
const questionRoutes = require("./question.routes");
const formatResponse = require("../utils/formatResponse");

router
.use("/auth", userRouter)
.use("/questions", questionRoutes)
.use('/topics',topicsRoutes)
.use("/game", gameRoutes);

router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
