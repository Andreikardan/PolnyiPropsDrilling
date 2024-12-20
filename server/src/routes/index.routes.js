const router = require("express").Router();
const userRouter = require("./auth.routes");
const gameQuestionRoutes = require('./gameQuestion.routes')
const questionRoutes = require("./question.routes");
const formatResponse = require("../utils/formatResponse");
const topicsRoutes =require('./topics.routes')

router
.use("/questions", questionRoutes)
.use("/auth", userRouter)
.use('/topics',topicsRoutes)
.use('/game-questions', gameQuestionRoutes)
 



router.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = router;
