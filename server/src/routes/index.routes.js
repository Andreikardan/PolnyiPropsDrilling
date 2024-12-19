const router = require("express").Router();
const userRouter = require("./auth.routes");
const gameQuestionRoutes = require('./gameQuestion.routes')

router.use("/auth", userRouter)
.use('/game-questions', gameQuestionRoutes)




module.exports = router;
