
exports.seed = async function(knex) {
  await knex("recipies_ingredients").truncate()
  await knex("ingredients").truncate()
  await knex("rec").truncate()
  await knex("amount").truncate()
};
