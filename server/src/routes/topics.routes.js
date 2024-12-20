const TopicsController = require("../controllers/Topics.controller");

const router = require("express").Router();


router.get('/', TopicsController.getTopicsWithQuestion)
module.exports = router;
