const formatResponse = require("../utils/formatResponse");
const GameService = require('../services/Game.service')

class GameController{
    static async create(req, res){
        const {user} = res.locals;
        try {
            const newGame = await GameService.create(user);
            res.status(200).json(formatResponse(200, "success", newGame));
        } catch ({message}) {
            console.log(message);
            res.status(500).json(formatResponse(500, "Internal server error", null, message));
        }
        }

    static async update(req, res) {
        const {user} = res.locals
        const {result} = req.body
        try {
                const lastGame = await GameService.last(user.id)
            if (lastGame === null){
                res.status(404).json(formatResponse(404, "Not found", null));
            }
            const newResult = await GameService.update(lastGame, +result)
            res.status(200).json(formatResponse(200, "success", newResult));
        } catch ({message}) {
            console.log(message);
            res.status(500).json(formatResponse(500, "Internal server error", null, message));
        }
    }
}

module.exports= GameController