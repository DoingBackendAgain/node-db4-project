
exports.seed = async function(knex) {
  await knex("ingredients").truncate()
  await knex("rec").truncate()
  await knex("amount").truncate()
};
