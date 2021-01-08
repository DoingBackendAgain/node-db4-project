
exports.seed = async function(knex) {
  await knex("recipies_ingredients").insert([
    {rec_id: 1 , ingredients_id: 3 , amount_id: 3 },
    {rec_id: 1 , ingredients_id: 11 , amount_id: 1 },
    {rec_id: 2 , ingredients_id: 5 , amount_id: 1 },
    {rec_id: 2, ingredients_id: 3, amount_id: 2 },
    {rec_id: 3 , ingredients_id: 4 , amount_id: 7 },
    {rec_id: 3, ingredients_id: 6, amount_id: 8 },
    {rec_id: 4, ingredients_id: 1, amount_id:2 },
    {rec_id: 4, ingredients_id: 2, amount_id: 9},
    {rec_id: 5, ingredients_id: 1, amount_id: 11 },
    {rec_id: 5, ingredients_id: 9, amount_id: 7}
  ]) 
};
