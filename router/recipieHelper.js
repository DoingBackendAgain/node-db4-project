
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

//this is weird but I've got it, mostly
function getShoppingList(id){
    return db('recipies_ingredients')
        .innerJoin('rec', "rec.id", "recipies_ingredients.rec_id" )
        .innerJoin("amount", "amount.id", "recipies_ingredients.amount_id" )
        .innerJoin("ingredients", "ingredients.id", "recipies_ingredients.ingredients_id" )
        .where("recipies_ingredients.rec_id", id)
        .select("rec.name", "amount.amount", "rec.instructions",  "ingredients.name")
        
};


function getInstructions(id){
    return db("rec")
        .where({id})
        .select("rec.name","rec.instructions")
}