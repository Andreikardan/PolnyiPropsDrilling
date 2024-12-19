const router = require("express").Router();
const userRouter = require("./auth.routes");
const topicsRoutes =require('./topics.routes')

router.use("/auth", userRouter);
router.use('/topics',topicsRoutes)



module.exports = router;
