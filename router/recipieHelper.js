
const db = require("../data/config")

module.exports = {
    getRecipie,
    getShoppingList,
    getInstructions
}

function getRecipie(){
    return db("rec")
};

function getShoppingList(id){
    return db('rec')
        .innerJoin('rec.id', 'recipies_ingredients.rec_id')
        .where("rec.id", id)
        .select("rec.name", "rec.instructions")

    
};

function getInstructions(id){
    return db("rec")
        .where("rec.id", id)
        .select("rec.instructions")
}