const{Game}=require('../db/models')

class GameService{
    static async last(id) {
        const maxIdRecord = await Game.findOne({
            where: { user_id: id },
            order: [['id', 'DESC']]
        });
        return maxIdRecord ? maxIdRecord.id : null;
    }
    static async create(data){
        return await Game.create(data)
    }
    static async update(id, data){
        const game = await Game.findByPk(id);
        game.result = game.result+data
        await game.save();
        return game;
    }
}

module.exports = GameService