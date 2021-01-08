
const { select } = require("../data/config")
const db = require("../data/config")

module.exports = {
    getRecipie,
    getRecipieById,
    getShoppingList,
    getInstructions
}

function getRecipie(){
    return db("rec")
};

function getRecipieById(id){
    return db("rec")
        .where({id})
}

function getShoppingList(id){
    return db('recipies_ingredients as ri')
        .innerJoin('rec', "rec.id", "ri.rec_id" )
        .where("rec.id", id)
        .select("rec.name", "rec.instructions")
        
        
    
};

function getInstructions(id){
    return db("rec")
        .where({id})
        .select("rec.name","rec.instructions")
}